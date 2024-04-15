// backend/routes/predict.mjs

import express from 'express';
import axios from 'axios';
import  path from 'path';

const router = express.Router();

// Load your trained ML model here
const modelPath = path.join(__dirname, '../utilities/logreg.pkl');

// Define a route for handling predictions
router.post('/predict', async (req, res) => {
  try {
    // Extract traits data from the request body
    const { openness, conscientiousness, extraversion, agreeableness, neuroticism } = req.body;

    // Perform any necessary preprocessing on the traits data

    // Make a POST request to the ML model endpoint with the traits data
    const modelResponse = await axios.post('YOUR_MODEL_ENDPOINT', {
      age,
      gender,
      openness,
      conscientiousness,
      extraversion,
      agreeableness,
      neuroticism,
    });

    // Extract and return the predicted personality from the model response
    const predictedPersonality = modelResponse.data.personality;
    res.json({ personality: predictedPersonality });
  } catch (error) {
    console.error('Prediction failed:', error);
    res.status(500).json({ error: 'Prediction failed' });
  }
});

export default router;
