import React from "react";
import rakipImg from "../../../images/Page2_img/desktop-row-opponent-analysis.png";
import "./DoCompetitor.css";
const DoCompetitor = () => {
  return (
    <div className="my-5 py-5">
      <div className="row w-100">
        <div className="col-12 col-md-12 col-lg-5 order-1 order-sm-1 order-md-1 order-lg-0 rakip-analize-description-div">
          <h4 className="rakip-analizi-header">Special for Professionals</h4>
          <h1 className="rakip-analizi-title">Do Competitor Analysis</h1>
          <h6 className="rakip-analizi-des">
          You can compare your brand's success in complaint management with your competitors and brands in other sectors, and you can see where you stand in the competition with numerical data.
You can analyze the complaint data of your competitors and use this data to develop strategies for your potential customers.
          </h6>
          <button className="rakip-analizi-btn">Sign Up Now</button>
        </div>
        <div className="col-12 col-md-12 col-lg-7 order-0 order-sm-0 order-md-0 order-lg-1">
          <img src={rakipImg} className="w-100 rakip-img" alt="" />
        </div>
      </div>
    </div>
  );
};

export default DoCompetitor;
