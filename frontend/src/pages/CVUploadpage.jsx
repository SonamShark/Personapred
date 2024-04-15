import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CVUpload = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!file) {
      setErrorMessage("Please select a file.");
      return;
    }

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      await axios.post("http://localhost:5555/upload", formData);
      // Clear the file input after successful upload
      setFile(null);
      setErrorMessage("");
      alert("CV uploaded successfully!");
      navigate("/QnA");
    } catch (error) {
      console.error("Upload failed:", error);
      setErrorMessage("Upload failed. Please try again later.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-3xl font-bold mb-16 text-black-500 text-center">
        Upload your CV here
      </p>
      <div className="bg-gray-200 shadow-md rounded px-8 pt-10 pb-12 mb-4">
        <input
          type="file"
          className="mb-4"
          onChange={handleFileChange}
          accept=".pdf, .doc, .docx"
        />
        {errorMessage && (
          <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
        )}
        <button
          className={`bg-blue-500 text-white py-2 px-4 rounded ${
            uploading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
          }`}
          onClick={handleSubmit}
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </div>
    </div>
  );
};

export default CVUpload;
