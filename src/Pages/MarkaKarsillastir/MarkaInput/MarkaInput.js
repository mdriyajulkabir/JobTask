import React from "react";
import "./MarkaInput.css";
const MarkaInput = () => {
  return (
    <div className="marka-input-body">
      <div className="marka-input-container">
        <h1>Brand Comparison</h1>
        <div>
          <input type="text" placeholder="1. Brand" className="marka-input" />
          <span style={{ color: "#686677" }}>with</span>
          <input type="text" placeholder="2. Brand" className="marka-input-2" />

          <input type="button" id="marka-btn" value="Compare" />
        </div>
      </div>
    </div>
  );
};

export default MarkaInput;
