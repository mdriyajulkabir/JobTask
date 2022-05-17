import React from "react";
import "./NewComparison.css";
const NewComparison = () => {
  return (
    <div className="new-comparison-container">
      <h3>New Comparison</h3>
      <div className="new-comparison">
        <input
          type="text"
          placeholder="1. Brand"
          className="new-comparison-input"
        />
        <p className="comparison-with">with</p>
        <input
          type="text"
          placeholder="2. Brand"
          className="new-comparison-input"
        />
        <button type="submit" className="comparison-btn">
          Compare
        </button>
      </div>
    </div>
  );
};

export default NewComparison;
