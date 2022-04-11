import React from "react";
import "./Musterilerinizle.css";
import musterilerinizelImg from "../../../images/Page2_img/desktop-row-customer-directly-contact.png";
const Musterilerinizle = () => {
  return (
    <div className="my-5 py-5">
      <div className="row w-100">
        <div className="col-12 col-lg-6 musterilerinizle-description-div order-1 order-md-1 order-lg-0">
          <h1 className="musterilerinizle-header">Müşterilerinizle Direkt <br /> İletişim Kurun.</h1>
          <h5 className="musterilerinizel-p">
            Her ay milyonlarca ziyaretçi, şikayetleri ve markaların <br /> cevaplarını
            okuyarak fikir sahibi olur, alışveriş kararlarını <br /> bunlara göre
            verir. <br /> Şikayetvar yönetim panelinden tüm şikayetleri kolayca takip <br />
            edebilir, müşterilerinizle anında iletişime geçebilirsiniz.
          </h5>
        </div>
        <div className="col-12 col-lg-6 order-0 order-md-0 order-lg-1">
          <img src={musterilerinizelImg} className="img-fluid mb-5 musterilerinizel-img" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Musterilerinizle;
