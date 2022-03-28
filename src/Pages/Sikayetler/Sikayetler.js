// import { Modal } from 'bootstrap';
import React from "react";
import Footer from "../Home/Footer/Footer";
import Header from "../Home/Header/Header";
import "./Sikayetler.css";
import TumSikayetler from "./TumSikayetler/TumSikayetler";
const Sikayetler = () => {
  return (
    <div className="sikayetler-container">
      <Header />
      <TumSikayetler />
      <Footer />
    </div>
  );
};

export default Sikayetler;
