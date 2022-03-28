import React from "react";
import Footer from "../Home/Footer/Footer";
import Header from "../Home/Header/Header";
import MarkaInput from "./MarkaInput/MarkaInput";
import Popular from "./Popular/Popular";

const MarkaKarsilastir = () => {
  return (
    <div>
      <Header />
      <MarkaInput />
      <Popular />
      <Footer />
    </div>
  );
};

export default MarkaKarsilastir;
