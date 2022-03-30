import React from "react";
import "./Marka.css";
const Marka = () => {
  return (
    <div className="marka-body px-4 py-5">
      <div className="w-100 marka-container">
        <h3 className="text-white">Marka Karşılaştırması</h3>
        <br />
        <h4 className="fw-light marka-title">
          <span className="text-white">
            Her gün yüzbinlerce kişi alışverişten önce Şikayetvar’a geliyor.
            Hangi <br /> markayı seçeceğine
          </span>{" "}
          <span className="text-success"> burada karar veriyor</span>{" "}
          <span className="text-white"></span>
        </h4>
        <p className="karma-p">
          Markaların müşteri memnuniyeti ve şikayet yönetimi konusunda <br />
          performanslarını karşılaştırın, kararınızı kolayca verin
        </p>
        <div>
          <input type="text" placeholder="1. Marka" className="karma-input" />
          <span style={{ color: "#686677" }} className='karma-span'>ile</span>
          <input type="text" placeholder="1. Marka" className="karma-input-2" />

          <input type="button" id="karma-btn" value="Karşılaştır" />
        </div>
        <div>
          <div className="half-circle" />
          <div className="full-circle" />
          <div className="line" />
          <div className="arrow" />
          <div className="arrow2" />
        </div>
      </div>
    </div>
  );
};

export default Marka;
