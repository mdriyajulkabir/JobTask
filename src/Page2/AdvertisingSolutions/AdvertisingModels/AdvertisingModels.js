import React from "react";
import "./AdvertisingModels.css";
import model1 from "../../../images/Page2_img/model1.png";
import model2 from "../../../images/Page2_img/model3.png";
import model3 from "../../../images/Page2_img/programmatic-advertising.png";
const AdvertisingModels = () => {
  return (
    <div className="advertising-models-container">
      <h1>Advertising Models</h1>
      <div className="row w-100 text-center">
        <div className="col-12 col-md-12 col-lg-4 advertising-div">
          <img src={model1} className="img-fluid model-img" alt="" />
          <h3>Premium Advertising</h3>
        </div>
        <div className="col-12 col-md-12 col-lg-4 advertising-div">
          <img src={model2} className="img-fluid model-img" alt="" />
          <h3>Targeted Advertising</h3>
        </div>
        <div className="col-12 col-md-12 col-lg-4 advertising-div">
          <div className="model-3 model-img">
            <img src={model3} className="img-fluid h-100" alt="" />
          </div>
          <h3>Programmatic Advertising</h3>
        </div>
      </div>
      <p>For detailed information, you can review our Cookie Policy page.</p>
      <div className="advertising-btn-div"><button className="advertising-btn">Get Detailed Information</button></div>
    </div>
  );
};

export default AdvertisingModels;
