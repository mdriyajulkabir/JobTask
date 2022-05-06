import React from "react";
import Footer from "../Home/Footer/Footer";
import Header from "../Home/Header/Header";
import BrandComparision from "./BrandComparision/BrandComparision";
import Popular from "./Popular/Popular";

const CompareBrands = () => {
  return (
    <div>
      <Header />
      <BrandComparision />
      <Popular />
      <Footer />
    </div>
  );
};

export default CompareBrands;
