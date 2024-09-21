// src/components/EditableWelcomeOptions.js
import React from "react";

const EditableWelcomeOptions = ({ data, onWelcomeChange, onImageChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onWelcomeChange({
      ...data,
      [name]: value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageChange(reader.result); // Update the image in base64 format
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4">Edit Welcome Page</h3>
      <div className="mb-4">
        <label className="block text-sm font-medium" htmlFor="heading">
          Title:
        </label>
        <input
          type="text"
          id="heading"
          name="heading"
          value={data.heading}
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
        <label className="block text-sm font-medium" htmlFor="buttonLabel">
          Button Label:
        </label>
        <input
          type="text"
          id="buttonLabel"
          name="buttonLabel"
          value={data.buttonLabel}
          onChange={handleChange}
          className="form-control mt-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Upload Image:</label>
        <label className="btn btn-primary mt-2">
          Choose Image
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="d-none" // Hide the actual file input
          />
        </label>
      </div>
    </div>
  );
};

export default EditableWelcomeOptions;
