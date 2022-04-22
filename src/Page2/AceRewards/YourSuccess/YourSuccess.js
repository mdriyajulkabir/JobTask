import React from "react";
import successImg from "../../../images/Page2_img/desktop-row-success-visible.png";
import './YourSuccess.css'
const yourSuccess = () => {
  return (
    <div className="my-5 py-5">
      <div className="row w-100">
        <div className="col-12 col-md-12 col-lg-6">
          <img src={successImg} className="img-fluid" alt="" />
        </div>
        <div className="col-12 col-md-12 col-lg-6 success-description">
          <h1>Everyone Sees Your Success</h1>
          <h5>
            The award is added to the brand's scorecard page in Complaintvar as
            a badge of success.
          </h5>
          <p>
            The award you receive in Complaintvar does not stay on the shelf, it
            is displayed in the <span>Achievements</span> area of ​​your brand
            scorecard page. You share the reward with your customers and site
            visitors who visit the page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default yourSuccess;
