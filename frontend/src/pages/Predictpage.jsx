// import { useState } from "react";
// import axios from "axios";

// const Predict = () => {
//   const [traits, setTraits] = useState({
//     openness: 0,
//     conscientiousness: 0,
//     extraversion: 0,
//     agreeableness: 0,
//     neuroticism: 0,
//   });

//   const handleChange = (trait, value) => {
//     setTraits({ ...traits, [trait]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:5555/predict",
//         traits
//       );
//       console.log("Predicted personality:", response.data);
//       // Display the predicted personality to the user
//     } catch (error) {
//       console.error("Prediction failed:", error);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
//       <h2 className="text-2xl font-bold mb-6">
//         Rate yourself on the following questions
//       </h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>

//           <Slider
//             trait="openness"
//             label="Openness: When faced with new ideas or experiences, do you tend to embrace them eagerly, or do you prefer to stick with what you already know?"
//             value={traits.openness}
//             onChange={handleChange}
//           />
//           <Slider
//             trait="conscientiousness"
//             label="Conscientiousness: Would you say you prefer having a clear plan and sticking to it, or do you enjoy being flexible and spontaneous?"
//             value={traits.conscientiousness}
//             onChange={handleChange}
//           />
//           <Slider
//             trait="extraversion"
//             label="Extraversion: In social settings, do you usually feel energized and thrive on interaction with others, or do you find yourself more comfortable in quieter, solitary environments?"
//             value={traits.extraversion}
//             onChange={handleChange}
//           />
//           <Slider
//             trait="agreeableness"
//             label="Agreeableness: When conflicts arise, do you tend to prioritize maintaining harmony and understanding, or are you more inclined to assert your own opinions and preferences?"
//             value={traits.agreeableness}
//             onChange={handleChange}
//           />
//           <Slider
//             trait="neuroticism"
//             label="Neuroticism: When facing stressful situations, do you tend to remain calm and composed, or do you find yourself experiencing heightened emotional responses?"
//             value={traits.neuroticism}
//             onChange={handleChange}
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
//         >
//           Predict Personality
//         </button>
//       </form>
//     </div>
//   );
// };
// const Slider = ({ trait, label, value, onChange }) => {
//   return (
//     <div>
//       <label className="block mb-1">{label}</label>
//       <input
//         type="range"
//         min="0"
//         max="10"
//         value={value}
//         onChange={(e) => onChange(trait, parseInt(e.target.value))}
//         className="w-full"
//       />
//       <div className="text-center">{value}</div>
//     </div>
//   );
// };

// export default Predict;
import { useState } from "react";
import axios from "axios";

const Predict = () => {
  const [traits, setTraits] = useState({
    openness: 0,
    conscientiousness: 0,
    extraversion: 0,
    agreeableness: 0,
    neuroticism: 0,
    gender: "", // Add gender state
    age: 18, // Add age state with a default value of 18
  });

  const handleChange = (trait, value) => {
    setTraits({ ...traits, [trait]: value });
  };

  const handleGenderChange = (e) => {
    setTraits({ ...traits, gender: e.target.value });
  };

  const handleAgeChange = (e) => {
    setTraits({ ...traits, age: parseInt(e.target.value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5555/predict",
        traits
      );
      console.log("Predicted personality:", response.data);
      // Display the predicted personality to the user
    } catch (error) {
      console.error("Prediction failed:", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 bg-gray-200 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">
        Rate yourself on the following questions
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Slider
            trait="openness"
            label="Openness: When faced with new ideas or experiences, do you tend to embrace them eagerly, or do you prefer to stick with what you already know?"
            value={traits.openness}
            onChange={handleChange}
          />
          <Slider
            trait="conscientiousness"
            label="Conscientiousness: Would you say you prefer having a clear plan and sticking to it, or do you enjoy being flexible and spontaneous?"
            value={traits.conscientiousness}
            onChange={handleChange}
          />
          <Slider
            trait="extraversion"
            label="Extraversion: In social settings, do you usually feel energized and thrive on interaction with others, or do you find yourself more comfortable in quieter, solitary environments?"
            value={traits.extraversion}
            onChange={handleChange}
          />
          <Slider
            trait="agreeableness"
            label="Agreeableness: When conflicts arise, do you tend to prioritize maintaining harmony and understanding, or are you more inclined to assert your own opinions and preferences?"
            value={traits.agreeableness}
            onChange={handleChange}
          />
          <Slider
            trait="neuroticism"
            label="Neuroticism: When facing stressful situations, do you tend to remain calm and composed, or do you find yourself experiencing heightened emotional responses?"
            value={traits.neuroticism}
            onChange={handleChange}
          />
          <div>
            <label className="block mb-1">Gender:</label>
            <div className="flex">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                checked={traits.gender === "male"}
                onChange={handleGenderChange}
              />
              <label htmlFor="male" className="ml-2 mr-4">
                Male
              </label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                checked={traits.gender === "female"}
                onChange={handleGenderChange}
              />
              <label htmlFor="female" className="ml-2">
                Female
              </label>
            </div>
          </div>
          <div className="flex items-center">
            <label className="block mb-1">Age: </label>
            <input
              type="number"
              value={traits.age}
              onChange={handleAgeChange}
              min="0"
              max="120"
              className="w-half border-2 border-blue-500"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          Predict Personality
        </button>
      </form>
    </div>
  );
};

const Slider = ({ trait, label, value, onChange }) => {
  return (
    <div>
      <label className="block mb-1">{label}</label>
      <input
        type="range"
        min="0"
        max="10"
        value={value}
        onChange={(e) => onChange(trait, parseInt(e.target.value))}
        className="w-full"
      />
      <div className="text-center">{value}</div>
    </div>
  );
};

export default Predict;
