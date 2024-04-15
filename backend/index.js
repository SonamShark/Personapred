//index.js
import {userRouter} from "./routes/user.js";
import express, { response } from "express";
import mongoose from "mongoose";
import { PORT, url } from "./config.js";
import { UserModel} from "./models/User.js";
import cors from "cors";
import multer from "multer";
import path from "path";
import predictRouter from './routes/predict.js';


const app = express();

app.use(express.json());
app.use(cors()); // Enable CORS
app.use("/", userRouter);

app.get("/", (req, res) => {
  res.send("ok");
});

// Middleware to handle file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads'); // Directory where uploaded files will be stored
  },
  filename: (req, file, cb) => {
    // Rename the uploaded file (optional)
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// Route to handle file uploads
app.post('/upload', upload.single('file'), (req, res) => {
  // If file upload is successful, the file details will be available in req.file
  console.log('File uploaded:', req.file);
  res.status(200).send('File uploaded successfully');
});

// Mount the predict route
app.use('/api', predictRouter);

const port = PORT || 5555;
mongoose.connect(url)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
