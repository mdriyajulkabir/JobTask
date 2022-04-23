import React from "react";
import "./Communicate.css";
import musterilerinizelImg from "../../../images/Page2_img/desktop-row-customer-directly-contact.png";
const Communicate = () => {
  return (
    <div className="my-5 py-5">
      <div className="row w-100">
        <div className="col-12 col-lg-6 musterilerinizle-description-div order-1 order-md-1 order-lg-0">
          <h1 className="musterilerinizle-header">Communicate Directly <br />  With Your Customers.</h1>
          <h5 className="musterilerinizel-p">
          Every month, millions of visitors get an idea by reading the <br /> complaints and the answers of the brands and make their<br /> shopping decisions accordingly. <br /> You can easily track all complaints from the Complaints <br />
          management panel, and instantly communicate with your customers.
          </h5>
        </div>
        <div className="col-12 col-lg-6 order-0 order-md-0 order-lg-1">
          <img src={musterilerinizelImg} className="img-fluid mb-5 musterilerinizel-img" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Communicate;
