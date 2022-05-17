import React from "react";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import BrandComparison from "./BrandComparison/BrandComparison";
import Sayılarla from "./Sayılarla/Sayılarla";
import Sikayetvar from "./Sikayetvar/Sikayetvar";
import SliderMain from "./SliderMain/SliderMain";
import Tuketici from "./Tüketici/Tuketici";
import StarRanking from "./StarRanking/StarRanking";

const Home = () => {
  return (
    <div className="">
      <Header />
      <Banner />
      <SliderMain />
      <BrandComparison />
      <StarRanking />
      <Sikayetvar /> 
      <Sayılarla />
      <Tuketici />
      <Footer />
    </div>
  );
};

export default Home;
