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
        <div className="row">
          <div className="col-lg-8 col-sm-12 col-12">
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
          <div className="col-lg-4 col-sm12 col-12">
            <div className="social_icon ">
              <p className="paylas">Paylaş</p>
              <p className="tweeter">
                <i className="fab fa-twitter-square i-icon"></i>
              </p>
              <p className="facebook">
                <i className="fab fa-facebook-square i-icon"></i>
              </p>
              <p className="linkedIn">
                <i className="fab fa-linkedin i-icon"></i>
              </p>
              <p className="whatsapp">
                <i className="fab fa-whatsapp-square i-icon"></i>
              </p>
              <p className="more">
                <i className="fas fa-plus i-icon"></i>
              </p>
            </div>
          </div>
          <p className="pt-3 t-text">
              Trend 100, Türkiye’de en fazla merak edilen markaları listeler.
            </p>
        </div>
      </div>
      <div className="container pt-5 p-5">
        <div className="row fw-bold pt-5" style={{ color: "#afb0b6" }}>
          <div className="col">
            <p className="">
              <small>Marka</small>
            </p>
          </div>
          <div className="col">
            <div className="tt-text">
              <p>
                <small>Trend</small>
              </p>
              <p>
                <small>Ziyaret Artışı</small>
              </p>
              <p>
                <small>Önceki Sıralama</small>
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
