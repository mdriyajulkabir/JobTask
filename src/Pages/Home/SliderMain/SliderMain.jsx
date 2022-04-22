import React from "react";
import SliderNegative from "./SliderNegative/SliderNegative";
import "./SliderMain.css";
import SliderPositive from "./SliderPositive/SliderPositive";
const SliderMain = () => {
  return (
    <div className="w-100 slider-main-container">
      <h1>Complaints on the Agenda</h1>
      <SliderPositive />
      <SliderNegative />
    </div>
  );
};

export default SliderMain;
