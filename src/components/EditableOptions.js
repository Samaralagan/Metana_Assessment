import React, { useState } from "react";

const EditableOptions = ({ data, onEmailChange }) => {
  const [emailError, setEmailError] = useState(""); // To store validation error

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Enhanced email validation regex
    const emailRegex =
      /^[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;

    if (name === "email") {
      if (emailRegex.test(value)) {
        setEmailError(""); // Clear error if valid
      } else {
        setEmailError(
          "Invalid email format. Allowed characters: letters, numbers, dashes. The last portion of the domain must be at least two characters, e.g., .com, .org, .cc."
        );
      }
    }

    onEmailChange({
      ...data,
      [name]: value,
    });
  };

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4">Edit Email Form</h3>
      <div className="mb-4">
        <label className="block text-sm font-medium" htmlFor="title">
          Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={data.title}
          onChange={handleChange}
          className="form-control mt-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium" htmlFor="description">
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          value={data.description}
          onChange={handleChange}
          className="form-control mt-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium" htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          className={`form-control mt-2 ${emailError ? "is-invalid" : ""}`} // Bootstrap 'is-invalid' for error styling
        />
        {emailError && (
          <p className="text-danger mt-1">{emailError}</p> // Show error message
        )}
      </div>
    </div>
  );
};

export default EditableOptions;
