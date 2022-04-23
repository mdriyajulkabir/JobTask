import React from "react";
import onlineImg from "../../../images/Page2_img/desktop-row-online-contact.png";
import "./Strengthen.css";
const Strengthen = () => {
  return (
    <div>
      <div className="row w-100 my-5 py-5">
        <div className="col-12  col-lg-7">
          <img src={onlineImg} className="img-fluid mb-5" alt="" />
        </div>
        <div className="col-12  col-lg-5 online-description-div">
          <h1 className="w-75 online-header">Strengthen Your Online Reputation</h1>
          <h5 className="online-p">
          In searches about your brand, your satisfaction score, stars and resolved complaints in Complaints come to the fore. This increases the visibility and reliability of your brand.
          </h5>
          <button type="submit" className="online-btn">
          Become a Corporate Member
          </button>
        </div>
      </div>
    </div>
  );
};

export default Strengthen;
