// import { Modal } from 'bootstrap';
import React from "react";
import Footer from "../Home/Footer/Footer";
import Header from "../Home/Header/Header";
import "./Complaints.css";
import AllComplaints from "./AllComplaints/AllComplaints";
const Complaints = () => {
  return (
    <div className="sikayetler-container">
      <Header />
      <AllComplaints />
      <Footer />
    </div>
  );
};

export default Complaints;
