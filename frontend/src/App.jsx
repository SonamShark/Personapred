//app.jsx
//import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Register from "./pages/Registerpage";
import Login from "./pages/Loginpage";
import CVUploadpage from "./pages/CVUploadpage";
import Predict from "./pages/Predictpage";
import PredictResult from "./pages/Predictresult";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/upload" element={<CVUploadpage />} />
          <Route path="/QnA" element={<Predict />} />
          <Route path="/predict" element={<PredictResult />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
