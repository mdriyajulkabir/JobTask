import React from "react";
import Slider from "react-slick";
import img1 from "../../../../images/AutoPlaySlider/3eb34c14ca8a8cf8777f861afd570cc0_50x50.jpg";
import img2 from "../../../../images/AutoPlaySlider/6193c269bedcc5e644e28b1fbd53457a_50x50.jpg";
import img3 from "../../../../images/AutoPlaySlider/91ca8ffd436dffdc7ef838c5ef9eec24_50x50.jpg";
import img4 from "../../../../images/AutoPlaySlider/af648d37edb8c8c8cfa94bac80f758d8_50x50.jpg";
import img5 from "../../../../images/AutoPlaySlider/k_50x50.svg";
import reply from "../../../../images/AutoPlaySlider/reply.svg";
const SliderPositive = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 1,
    cssEase: "linear",
  };
  return (
    <div className="slider-negative-container">
      <Slider {...settings}>
        <div>
          <div className="single-card-slider">
            <div className="d-flex">
              <img src={img1} className="slider-person-img me-3" alt="" />
              <div>
                <div className="d-flex">
                  <h4 className="me-3">Nezihe</h4>
                  <div className="d-flex align-items-start">
                    <img src={reply} className="pt-2 pe-2" alt="" />
                    <span>Instagram</span>
                  </div>
                </div>
                <p>19.856görüntüleme</p>
              </div>
            </div>
            <h5>Op. Dr. Feridun Kunak Detoks Çayı</h5>
          </div>
        </div>
        <div>
          <div className="single-card-slider">
            <div className="d-flex">
              <img src={img2} className="slider-person-img me-3" alt="" />
              <div>
                <div className="d-flex">
                  <h4 className="me-3">Nezihe</h4>
                  <div className="d-flex align-items-start">
                    <img src={reply} className="pt-2 pe-2" alt="" />
                    <span>Instagram</span>
                  </div>
                </div>
                <p>19.856görüntüleme</p>
              </div>
            </div>
            <h5>Global Satış İcra Mesajı Alıyorum</h5>
          </div>
        </div>
        <div>
          <div className="single-card-slider">
            <div className="d-flex">
              <img src={img3} className="slider-person-img me-3" alt="" />
              <div>
                <div className="d-flex">
                  <h4 className="me-3">Nezihe</h4>
                  <div className="d-flex align-items-start">
                    <img src={reply} className="pt-2 pe-2" alt="" />
                    <span>Instagram</span>
                  </div>
                </div>
                <p>19.856görüntüleme</p>
              </div>
            </div>
            <h5>Global Satış İcra Takibi Mesajı Gönderdi</h5>
          </div>
        </div>
        <div>
          <div className="single-card-slider">
            <div className="d-flex">
              <img src={img4} className="slider-person-img me-3" alt="" />
              <div>
                <div className="d-flex">
                  <h4 className="me-3">Nezihe</h4>
                  <div className="d-flex align-items-start">
                    <img src={reply} className="pt-2 pe-2" alt="" />
                    <span>Instagram</span>
                  </div>
                </div>
                <p>19.856görüntüleme</p>
              </div>
            </div>
            <h5>Op. Dr. Feridun Kunak Detoks Çayı</h5>
          </div>
        </div>
        <div>
          <div className="single-card-slider">
            <div className="d-flex">
              <img src={img5} className="slider-person-img me-3" alt="" />
              <div>
                <div className="d-flex">
                  <h4 className="me-3">Nezihe</h4>
                  <div className="d-flex align-items-start">
                    <img src={reply} className="pt-2 pe-2" alt="" />
                    <span>Instagram</span>
                  </div>
                </div>
                <p>19.856görüntüleme</p>
              </div>
            </div>
            <h5>Amazon Uygulamasında Yorum Yaparak Para Kazanma</h5>
          </div>
        </div>
        <div>
          <div className="single-card-slider">
            <div className="d-flex">
              <img src={img1} className="slider-person-img me-3" alt="" />
              <div>
                <div className="d-flex">
                  <h4 className="me-3">Nezihe</h4>
                  <div className="d-flex align-items-start">
                    <img src={reply} className="pt-2 pe-2" alt="" />
                    <span>Instagram</span>
                  </div>
                </div>
                <p>19.856görüntüleme</p>
              </div>
            </div>
            <h5>Instagram Hesap Çalma Kolaylığı</h5>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderPositive;
