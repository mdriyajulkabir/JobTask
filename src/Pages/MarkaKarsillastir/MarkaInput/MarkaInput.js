import React from "react";
import "./MarkaInput.css";
const MarkaInput = () => {
  return (
    <div className="marka-input-body">
      <div className="marka-input-container">
        <h1>Marka Karşılaştırması</h1>
        <div>
          <input
           type="text" 
           placeholder="1. Marka" 
           className="marka-input" />
          <span 
          style={{ color: "#686677" }}
          >
              ile
          </span>
          <input 
          type="text" 
          placeholder="1. Marka" 
          className="marka-input-2" 
          />

          <input 
          type="button" 
          id="marka-btn" 
          value="Karşılaştır" 
          />
        </div>
      </div>
    </div>
  );
};

export default MarkaInput;
