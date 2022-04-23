import React from "react";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Marka from "./Marka/Marka";
import Sayılarla from "./Sayılarla/Sayılarla";
import Sikayetvar from "./Sikayetvar/Sikayetvar";
import SliderMain from "./SliderMain/SliderMain";
import Tuketici from "./Tüketici/Tuketici";
import Yıldız from "./Yıldız/Yıldız";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <SliderMain />
      <Marka />
      <Yıldız />
      <Sikayetvar />
      <Sayılarla />
      <Tuketici />
      <Footer />
    </div>
  );
};

export default Home;
