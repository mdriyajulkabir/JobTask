import React from "react";
import desktopResult from "../../../images/Page2_img/desktop-row-search-result.png";
import "./MarkaSayfasi.css";
const MarkaSayfasi = () => {
  return (
    <div>
      <div className="row w-100 kurumsal-marka-container">
        <div className="col-12 col-lg-6 kurumsal-marka-des-div order-1 order-md-0 order-lg-0">
          <h4 className="kurumsal-marka-header">Marka Sayfası</h4>
          <h1 className="kurumsal-marka-title w-75">
            Arama Sonuçlarında Dikkat Çekin
          </h1>
          <p className="kurumsal-marka-p">
            Şikayetvar marka sayfası, arama sonuçlarında en üst sıralarda
            görünür ve her ay milyonlarca kişi siteyi ziyaret eder
          </p>
        </div>
        <div className="col-12 col-lg-6 order-0 order-md-1 order-lg-1">
          <img
            src={desktopResult}
            alt=""
            className="marka-sayfasi-img img-fluid"
            title="Arama Sonuçlarında Dikkat Çekin"
          />
        </div>
      </div>
    </div>
  );
};

export default MarkaSayfasi;
