import React from "react";
import "./SingleTrend.css";
const SingleTrend = ({ service }) => {
  const {
    id,
    image,
    title,
    description,
    graph_img,
    percent,
    count_no,
    count_img,
    verification_img,
  } = service;
  return (
    <div className="">
      <div className="row ">
        <div className="col ms-4 me-4">
          <div className="t-part1">
            <div className="container">
              <div className="row">
                <div className="col part-1 pt-4">
                  <div className="me-4 pt-3">
                    <h3 style={{ color: "#999aa1", fontSize: "24px" }}>
                      {id}.
                    </h3>
                  </div>
                  <div className="me-4 part-img">
                    <img src={image} alt="" />
                  </div>
                  <div className="pt-2">
                    <div className="d-flex">
                      <h5
                        style={{
                          fontSize: "18px",
                          color: "#454444",
                          marginRight: "3px",
                        }}>
                        {title}
                      </h5>
                      <img src={verification_img} alt="" />
                    </div>
                    <p style={{ color: "#818c9e" }}>
                      <small>{description}</small>
                    </p>
                  </div>
                </div>
                <div className="col part-2 pt-4">
                  <div className="pt-2">
                    <img style={{ width: "65%" }} src={graph_img} alt="" />
                  </div>
                  <div className="pt-4 fw-bold">
                    <h6 style={{ color: "#85858b" }} className="fw-bold">
                      % {percent}
                    </h6>
                  </div>
                  <div className="pt-4 d-flex">
                    <h6 style={{ color: "#85858b" }} className="fw-bold">
                      {count_no}
                    </h6>
                    <img
                      style={{
                        width: "40%",
                        height: "20%",
                        marginLeft: "5px",
                        marginTop: "5px",
                      }}
                      src={count_img}
                      alt=""
                    />
                  </div>
                  <div className="pt-4 i-con2">
                    <i className="fas fa-angle-down "></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTrend;
