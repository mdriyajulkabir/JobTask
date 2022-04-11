import React from "react";
import degisimiImg from "../../../images/Page2_img/desktop-row-changes-nav.png";
import "./DegisimiSiz.css";
const DegisimiSiz = () => {
  return (
    <div className="my-5 py-5">
      <div className="row w-100">
        <div className="col-12 col-md-12 col-lg-7">
          <img src={degisimiImg} className="degisimiImg img-fluid mb-5" alt="" />
        </div>
        <div className="col-12 col-md-12 col-lg-5 degisimisiz-description">
          <h1 className="degisimisiz-header">Değişimi Siz <br /> Yönlendirin</h1>
          <h5 className="degisimisiz-p">
            Şikayet sayısını, çözümle ilgili müşteri değerlendirmelerini ve <br />
            memnuniyet puanınızdaki değişimleri takip edebilir, geçmiş 
            dönemlerle karşılaştırabilirsiniz.
          </h5>
          <button className="degisimisiz-btn">Hemen Üye Ol</button>
        </div>
      </div>
    </div>
  );
};

export default DegisimiSiz;
