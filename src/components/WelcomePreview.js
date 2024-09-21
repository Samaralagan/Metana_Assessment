// src/components/WelcomePreview.js
import React from "react";

const WelcomePreview = ({ data, image }) => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{data.heading}</h1>
      <p className="text-muted mb-4">{data.description}</p>
      <img
        src={image || "try.jpg"} // Show default image or uploaded image
        alt="Preview"
        className="img-fluid mb-4"
        style={{ width: "150px", height: "150px" }}
      />
      <button className="btn btn-dark">{data.buttonLabel}</button>
    </div>
  );
};

export default WelcomePreview;
