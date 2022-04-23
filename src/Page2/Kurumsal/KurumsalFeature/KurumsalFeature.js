import React from "react";
import brand from "../../../images/Page2_img/feature-brand-count.svg";
import memberCount from "../../../images/Page2_img/feature-member-count (1).svg";
import peopleCount from "../../../images/Page2_img/feature-visible-count (1).svg";
import "./KurumsalFeature.css";
const KurumsalFeature = () => {
  return (
    <div>
      <div className="row container-fluid w-100 mx-auto text-center feature-container">
        <div className="col-12 col-lg-3 col-sm-6 feature-div">
          <div>
            <img src={brand} className="feature-img" alt="" />
          </div>
          <div>
            <h1 className="feature-header">150 thousand</h1>
            <h5 className="feature-des">Registered Brand</h5>
          </div>
        </div>
        <div className="col-12 col-lg-3 col-sm-6">
          <img src={memberCount} className="feature-img" alt="" />
          <h1 className="feature-header">7.8 million</h1>
          <h5 className="feature-des">Number of Individual Members</h5>
        </div>
        <div className="col-12 col-lg-3 col-sm-6">
          <div>
            <img src={peopleCount} className="feature-img" alt="" />
          </div>
          <div>
            <h1 className="feature-header">20 million</h1>
            <h5 className="feature-des">Visitors in the Last 30 Days</h5>
          </div>
        </div>
        <div className="col-12 col-lg-3 col-sm-6">
          <div>
            <img
              src="https://cdn.sikayetvar.com/public/images/corporate/feature-page-count.svg"
              className="feature-img"
              alt=""
            />
          </div>
          <div>
            <h1 className="feature-header">70 million</h1>
            <h5 className="feature-des">Monthly Page Views</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KurumsalFeature;
