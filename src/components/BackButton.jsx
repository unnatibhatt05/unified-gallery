import React from "react";
import { useNavigate } from "react-router-dom";
import "./BackButton.css";  // Add styles

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button className="back-button" onClick={() => navigate(-1)}>
      ← Back
    </button>
  );
};

export default BackButton;
