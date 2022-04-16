import React from "react";
import user from "../../../images/Page2_img/happy-user.png";
import "./Complaints.css";
const Complaints = () => {
  return (
    <div className="pb-5">
      <div className="row w-100 my-5 pt-5">
        <div className="col-lg-6 col-md-12 col-12 complaints-user-div mb-5">
          <div className="complaints-user-img-div">
            <img src={user} className="img-fluid" alt="" />
          </div>
          <div className="row color-div">
            <div className="col-8 complaints-blue"></div>
            <div className="col-4 complaints-green"></div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-12 complaints-user-description">
          <h4>Why are Complaints Ads Preferred?</h4>
          <h1>
            The most accurate channel that brings your brand to your target
            audience
          </h1>
          <p>
            Complaintvar receives 20 million visits per month. The majority of
            the visitors are potential customers <br /> between the ages of 25-55 with
            high purchasing power . 95% of them come to Complaintvar to get
            information about the brand before making a purchase decision.
            <span className="fw-bolder">Because complainant is a decision-making platform</span> for consumers .
            That's why you can reach the right audience at the right time in
            Complaintvar. Remember, behind every decision there is a Complaint.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Complaints;
