import React, { useState } from "react";
import axios from "axios";
import { URLVALUE } from "./../../config.js";

const API_URL = `${URLVALUE}/api/v1/problems`;

function ProblemCreate() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    urgency: "",
    impactPotential: "",
    status: "",
    submittedBy: "",
    communityId: ""
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
      await axios.post(API_URL, formData);
      setSuccessMessage("Problem created successfully");
      setErrorMessage("");
      resetForm();
    } catch (error) {
      console.error("Error creating problem:", error);
      setSuccessMessage("");
      setErrorMessage("Failed to create problem. Please try again.");
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      category: "",
      urgency: "",
      impactPotential: "",
      status: "",
      submittedBy: "",
      communityId: ""
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-8 py-4 my-4 bg-gray-50 rounded-lg shadow-md opacity-70 ">
      {successMessage && <p className="text-pink-800 font-semibold mb-4">{successMessage}</p>}
      {errorMessage && <p className="text-red-600 font-semibold mb-4">{errorMessage}</p>}
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-serif text-xl mb-2">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="px-4 py-2 border border-pink-400 rounded-lg w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-serif text-xl mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="px-4 py-2 h-28 border border-pink-400 rounded-lg w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700 font-serif text-xl mb-2">
            Category
          </label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="px-4 py-2 border border-pink-400 rounded-lg w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="urgency" className="block text-gray-700 font-serif text-xl mb-2">
            Urgency
          </label>
          <input
            type="text"
            name="urgency"
            value={formData.urgency}
            onChange={handleChange}
            className="px-4 py-2 border border-pink-400 rounded-lg w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="impactPotential" className="block text-gray-700 font-serif text-xl mb-2">
            Impact Potential
          </label>
          <input
            type="text"
            name="impactPotential"
            value={formData.impactPotential}
            onChange={handleChange}
            className="px-4 py-2 border border-pink-400 rounded-lg w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="status" className="block text-gray-700 font-serif text-xl mb-2">
            Status
          </label>
          <input
            type="text"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="px-4 py-2 border border-pink-400 rounded-lg w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="submittedBy" className="block text-gray-700 font-serif text-xl mb-2">
            Submitted By
          </label>
          <input
            type="text"
            name="submittedBy"
            value={formData.submittedBy}
            onChange={handleChange}
            className="px-4 py-2 border border-pink-400 rounded-lg w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="communityId" className="block text-gray-700 font-serif text-xl mb-2">
            Community ID
          </label>
          <input
            type="text"
            name="communityId"
            value={formData.communityId}
            onChange={handleChange}
            className="px-4 py-2 border border-pink-400 rounded-lg w-full"
          />
        </div>
        <button
          type="submit"
          className=" text-pink-800 bg-pink-200 py-3 ml-2 mt-2 px-8 rounded-xl cursor-pointer shadow-lg focus:shadow-xl hover:shadow-xl active:shadow transform hover:-translate-y-0.5 active:translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 duration-300 ease-in-out">
          Create Problem
        </button>
      </form>
    </div>
  );
}

export default ProblemCreate;