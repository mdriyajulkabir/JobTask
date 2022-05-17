import React from "react";
import "./productComparison.css";

function ProductComparison() {
  return (
    <>
      <div className="marka-inputbody">
        <div className="marka-input-container">
          <h1>New comparison</h1>
          <div className="row justify-content-center align-items-center">
            <div className="col-12 my-2">
              <input
                type="text"
                placeholder="1. Brand"
                className="marka-input"
              />
            </div>
            <div className="col-12 my-2">
              <input
                type="text"
                placeholder="2. Brand"
                className="marka-input"
              />
            </div>
            <div className="col-12 my-2">
              <input
                className="w-100 marka-button"
                type="button"
                value="Compare"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductComparison;
