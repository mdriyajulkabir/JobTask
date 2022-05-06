import React, { useEffect, useState } from "react";
import Footer from "../Home/Footer/Footer";
import Header from "../Home/Header/Header";
import SingleTrend from "./SingleTrend/SingleTrend";
import "./Trend100.css";
const Trend100 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("trend.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <Header />
      <div className="container pt-5">
        <div className="row w-100">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <h1 className="t-t">
              Trend{" "}
              <span>
                <img
                  src="https://cdn.sikayetvar.com/public/images/100.svg"
                  alt="100"
                />
              </span>
            </h1>
          </div>
          <div className="col-lg-6 col-md-8 col-sm-8 col-11">
            <div className="social_icon ">
              <p className="paylas">Share</p>
              <p className="tweeter">
              <i class="fa-brands fa-twitter i-icon "></i>
              </p>
              <p className="facebook">
                <i className="fa-brands fa-facebook-f i-icon"></i>
              </p>
              <p className="linkedIn">
                <i className="fa-brands fa-linkedin i-icon"></i>
              </p>
              <p className="whatsapp">
                <i className="fa-brands fa-whatsapp i-icon"></i>
              </p>
              <p className="more">
                <i className="fa-solid fa-plus i-icon"></i>
              </p>
            </div>
          </div>
          <p className="pt-3 t-text">
          Trend 100, lists the most curious brands in Turkey.
            </p>
        </div>
      </div>
      <div className="container pt-5 p-5">
        <div className="row fw-bold pt-5" style={{ color: "#afb0b6" }}>
          <div className="col">
            <p className="trend-brand">
              <small>Brand</small>
            </p>
          </div>
          <div className="col">
            <div className="tt-text">
              <p>
                <small>Trend</small>
              </p>
              <p>
                <small>Visitor Increase</small>
              </p>
              <p>
                <small>Previous Sort</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container t-all">
        {data.map((service) => (
          <SingleTrend
            style={{ backgroundColor: "black" }}
            key={service.id}
            service={service}></SingleTrend>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Trend100;
