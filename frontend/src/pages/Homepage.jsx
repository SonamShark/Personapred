// Homepage.jsx
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Homepage = () => {
  const [cookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (!cookies.access_token) {
      navigate("/register");
    } else {
      navigate("/predict");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200 from-blue-200 to-purple-400 text-black">
      <h1 className="text-5xl font-bold mb-8 text-center">
        Unlock Your Personality Potential
      </h1>
      <p className="text-lg mb-12 text-center max-w-lg">
        Discover how your CV can reveal insights into your unique personality
        traits. Our advanced analysis uses machine learning algorithms to
        provide accurate predictions.
      </p>
      <button
        onClick={handleGetStarted}
        className="bg-white text-blue-500 py-3 px-6 rounded-full font-bold text-lg hover:bg-opacity-30 transition duration-300"
      >
        Get Started
      </button>
    </div>
  );
};

export default Homepage;
