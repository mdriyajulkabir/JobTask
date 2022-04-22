import React from "react";
import Slider from "react-slick";
import "./GallerySlider.css";
import galleryImg from "./galleryImg";
const GallerySlider = () => {
  const PreviousBtn = (props) => {
    console.log(props);
    const { onClick } = props;
    return (
      <div className="slick-arrow slick-prev" onClick={onClick}>
        <i
          class="fa-solid fa-arrow-left"
          style={{ color: "#fff", fontSize: "40px" }}></i>
      </div>
    );
  };
  const NextBtn = (props) => {
    console.log(props);
    const { onClick } = props;
    return (
      <div className="slick-arrow slick-next" onClick={onClick}>
        <i
          class="fa-solid fa-arrow-right"
          style={{ color: "#fff", fontSize: "40px" }}></i>
      </div>
    );
  };
  return (
    <div
      className="gallery-container-main 
    ">
      <div className="gallery-container py-5">
        <Slider
          dots
          infinite
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay
          autoplaySpeed={1000}
          cssEase={"linear"}
          prevArrow={<PreviousBtn />}
          nextArrow={<NextBtn />}
          customPaging={(i) => {
            return (
              <div>
                <img
                  src={galleryImg[i]}
                  alt=""
                  style={{
                    objectFit: "cover",
                    borderRadius: "20px",
                  }}
                  className="gallery-img-bottom"
                />
              </div>
            );
          }}
          dotsClass="slick-dots custom-indicator">
          {galleryImg.map((item) => (
            <div>
              <img
                src={item}
                alt=""
                style={{ width: "80%", height: "75vh", margin: "auto" }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default GallerySlider;
