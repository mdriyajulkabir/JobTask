import React from "react";
import onlineImg from "../../../images/Page2_img/desktop-row-online-contact.png";
import "./kurumsalOnline.css";
const KurumsalOnline = () => {
  return (
    <div>
      <div className="row w-100 my-5 py-5">
        <div className="col-12  col-lg-7">
          <img src={onlineImg} className="img-fluid mb-5" alt="" />
        </div>
        <div className="col-12  col-lg-5 online-description-div">
          <h1 className="w-75 online-header">Online İtibarınızı Güçlendirin</h1>
          <h5 className="online-p">
            Markanızla ilgili aramalarda Şikayetvar'daki memnuniyet puanınız,
            yıldızlarınız ve çözülen şikayetleriniz öne çıkar. Böylece
            markanızın görünürlüğü ve güvenirliği artar.
          </h5>
          <button type="submit" className="online-btn">
            Kurumsal Üye Ol
          </button>
        </div>
      </div>
    </div>
  );
};

export default KurumsalOnline;
