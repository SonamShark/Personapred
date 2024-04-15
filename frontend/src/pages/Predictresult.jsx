// PredictResult.jsx
import React from "react";

const PredictResult = ({}) => {
  //predictPersonality
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-200 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">Predicted Personality</h2>
      <p className="mb-4">The predicted personality is: {}</p>
      {/* You can add more details or options to navigate back to the Predict page */}
    </div>
  );
};

export default PredictResult;
