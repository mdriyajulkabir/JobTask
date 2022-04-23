import React from "react";
import degisimiImg from "../../../images/Page2_img/desktop-row-changes-nav.png";
import "./YouDrive.css";
const YouDrive = () => {
  return (
    <div className="my-5 py-5">
      <div className="row w-100">
        <div className="col-12 col-md-12 col-lg-7">
          <img src={degisimiImg} className="degisimiImg img-fluid mb-5" alt="" />
        </div>
        <div className="col-12 col-md-12 col-lg-5 degisimisiz-description">
          <h1 className="degisimisiz-header">You  Drive the Change</h1>
          <h5 className="degisimisiz-p">
          You can follow the number of complaints, customer evaluations <br /> regarding the solution and the changes in your satisfaction <br /> score, and compare them with previous periods.
          </h5>
          <button className="degisimisiz-btn">Sign Up Now</button>
        </div>
      </div>
    </div>
  );
};

export default YouDrive;
