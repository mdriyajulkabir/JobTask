import React from "react";

import "./brandSection.css";
import logo from "../../../images/iphoneLogo.webp"
function BrandSection() {
  return (
    <>
      <div className="brand-body bg-light mx-4 border-radius">
        <div className="row p-4 align-items-center">
          <div className="col-12 col-lg-6 my-2">
            <div className="row align-items-center">
              <div className="col-md-2 col-5">
                <img
                  className="img-fluid border-radius"
                  src={logo}
                  alt=""
                />
              </div>
              <div className="col-md-10 col-7">
                <p>iPhone</p>
                <p>Data for the last year</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 my-2">
            <div className="px-4 py-3 bg-white border-radius">
              <div className="row justify-content-center align-items-center">
                <div className="col-6 col-md-3 my-2 border-radius bg-primary py-2 px-4">
                  <h6>Number of Complanis</h6>
                  <p>4,286</p>
                </div>
                <div className="col-6 col-md-3 my-2">
                  <h6>Number of Solutions</h6>
                  <p>110</p>
                </div>
                <div className="col-12 col-md-6 my-2">
                  <button
                    type="button"
                    class="btn btn-outline-secondary rounded-pill"
                  >
                    See Brand ..
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BrandSection;
