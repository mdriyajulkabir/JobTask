import React from "react";
import contact from "../../../images/contact.svg";
import gaurd from "../../../images/guard.svg";
import check from "../../../images/Check.svg";
import eye from "../../../images/eye.svg";
import "./Sayilarla.css";
const Sayılarla = () => {
  return (
    <div className="sayilarla-container">
      <h1>Complaints by Numbers</h1>
      <div className="row">
        <div className="col-lg-3 col-sm-12 col-md-6 card-container">
          <div className="row card">
            <div className="col-lg-12 col-sm-4">
              <img src={contact} alt="" />
            </div>
            <div className="col-lg-12 col-sm-8">
              <span>Number Of Individual Members</span> <br />
              <strong>7.991.032</strong>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-12 col-md-6 card-container">
          <div className="row card">
            <div className="col-lg-12 col-sm-4">
              <img src={gaurd} alt="" />
            </div>
            <div className="col-lg-12 col-sm-8">
              <span>Registered Brand</span> <br />
              <strong>155.511</strong>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-12 col-md-6 card-container">
          <div className="row card">
            <div className="col-lg-12 col-sm-4">
              <img src={check} alt="" />
            </div>
            <div className="col-lg-12 col-sm-8">
              <span>Resolved Complaint</span> <br />
              <strong>1.923.051</strong>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-12 col-md-6 card-container">
          <div className="row card">
            <div className="col-lg-12 col-sm-4">
              <img src={eye} alt="" />
            </div>
            <div className="col-lg-12 col-sm-8">
              <span>Visitors In The Last 30 Days</span> <br />
              <strong>20.896.914</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sayılarla;
