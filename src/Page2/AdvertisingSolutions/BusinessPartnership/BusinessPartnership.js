import React from "react";
import team from "../../../images/Page2_img/team-experience-desktop.png";
import "./BusinessPartnership.css";
const BusinessPartnership = () => {
  return (
    <div>
      <div className="row w-100">
        <div className="col-lg-6 col-md-12 col-12 partnership-description order-1 order-sm-1 order-md-1 order-lg-0">
          <h1>A strong business partnership with an experienced team</h1>
          <p>
            You can manage complaints in the most appropriate and effective way
            for your company's strategies. With our different advertising models
            and our experienced team, we support you to grow your business and
            reach your goals.
          </p>
        </div>
        <div className="col-lg-6 col-md-12 col-12 order-0 order-sm-0 order-md-0 order-lg-1">
          <img src={team} className="partnership-img img-fluid " alt="" />
        </div>
      </div>
    </div>
  );
};

export default BusinessPartnership;
