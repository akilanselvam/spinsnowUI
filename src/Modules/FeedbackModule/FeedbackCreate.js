import React, { useState } from "react";
import axios from "axios";
import { URLVALUE } from "./../../config.js";

const API_URL = `${URLVALUE}/api/v1/feedback`;

function FeedbackCreate() {
  const [formData, setFormData] = useState({
    feedbackText: "",
    userId: "661a300d890d7f05801bb436"
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const response = await axios.post(API_URL, formData);
      setSuccessMessage("Feedback submitted successfully");
      setErrorMessage("");
      resetForm();
    } catch (error) {
      console.error("Error submitting feedback:", error);
      setSuccessMessage("");
      setErrorMessage("Failed to submit feedback. Please try again.");
    }
  };

  const resetForm = () => {
    setFormData({
      feedbackText: "",
      userId: "661a300d890d7f05801bb436"
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-8 py-4 my-4 bg-gray-50 rounded-lg shadow-md opacity-70 ">
      {successMessage && <p className="text-indigo-800 font-semibold mb-4">{successMessage}</p>}
      {errorMessage && <p className="text-red-600 font-semibold mb-4">{errorMessage}</p>}
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label htmlFor="feedbackText" className="block text-gray-700 font-serif text-xl mb-2">
            Feedback (required)
          </label>
          <textarea
            name="feedbackText"
            value={formData.feedbackText}
            onChange={handleChange}
            className="px-4 py-2 h-28 border border-indigo-400 rounded-lg w-full"
            required
          />
        </div>
        <button
          type="submit"
          className=" text-indigo-800 bg-indigo-200 py-3 ml-2 mt-2 px-8 rounded-xl cursor-pointer shadow-lg focus:shadow-xl hover:shadow-xl active:shadow transform hover:-translate-y-0.5 active:translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 duration-300 ease-in-out">
          Submit Feedback
        </button>
      </form>
    </div>
  );
}

export default FeedbackCreate;
