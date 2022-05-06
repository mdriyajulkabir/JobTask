import React from "react";
import "./BrandComparison.css";
const BrandComparison = () => {
  return (
    <div className="marka-body px-4 py-5">
      <div className="w-100 marka-container">
        <h3 className="text-white">Brand Comparison</h3>
        <br />
        <h4 className="fw-light marka-title">
          <span className="text-white">
            Every day, hundreds of thousands of people come to complain before{" "}
            <br /> shopping.
          </span>{" "}
          <span className="text-success"> Here he decides</span>{" "}
          <span className="text-white">which brand to choose .</span>
        </h4>
        <p className="karma-p">
          Compare the performances of brands in customer satisfaction and <br />
          complaint management, and make your decision easily.
        </p>
        <div>
          <input type="text" placeholder="1. Brand" className="karma-input" />
          <span style={{ color: "#686677" }} className="karma-span">
            with
          </span>
          <input type="text" placeholder="1. Brand" className="karma-input-2" />

          <input type="button" id="karma-btn" value="Compare" />
        </div>
        <div>
          <div className="half-circle" />
          <div className="full-circle" />
          <div className="line" />
          <div className="arrow" />
          <div className="arrow2" />
        </div>
      </div>
    </div>
  );
};

export default BrandComparison;
