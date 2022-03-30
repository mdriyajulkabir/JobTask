import React from "react";
import videoBanner from "../../../images/video-cover-image.jpg";
import "./Sikayetvar.css";
const Sikayetvar = () => {
  return (
    <div className="sikayetvar-container">
      <div className="row w-100">
        <div className="col-lg-4 col-sm-12 col-12 video-description-container">
          <h1>
            <span className="span-1">Şikayetvar</span> <br />
            <span className="span-2">Nasıl Çalışır?</span>
          </h1>
          <p>
            Çözüm ve karar verme aracı olan Şikayetvar'da kafanızı rahatlatır ve
            en doğru kararı alırsınız. 18 milyon ziyaretçi bu yolu izliyor ve
            yılda 450 binin üzerinde şikâyet çözüme kavuşuyor!
          </p>
        </div>
        <div className="col-lg-8 col-sm-12 col-12 video-container">
          <div className="green-circle"></div>
          <div className="gray-circle"></div>
          <div className="blue-half-circle"></div>
          <div className="green-half-circle"></div>
          <div className="yellow-circle"></div>
          <img src={videoBanner} className="video-img" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sikayetvar;
