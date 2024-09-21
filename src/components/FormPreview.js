import React from "react";

const FormPreview = ({ data }) => {
  return (
    <div className="p-4">
      <h2 className="h4">{data.title}</h2>
      <p className="text-muted">{data.description}</p>
      <input
        type="email"
        value={data.email}
        readOnly
        className="form-control mt-4"
        placeholder="Your email"
      />
    </div>
  );
};

export default FormPreview;
