import React from "react";
import Footer from "../../Pages/Home/Footer/Footer";
import NavBar from "../NavBar/NavBar";
import BrandsWeWork from "./BrandsWeWork/BrandsWeWork";
import YouDrive from "./YouDrive/YouDrive";
import KurumsalFeature from "./KurumsalFeature/KurumsalFeature";
import Strengthen from "./Strengthen/Strengthen";
import BrandPage from "./BrnadPage/BrandPage";
import Communicate from "./Communicate/Communicate.js";
import DoCompetitor from "./DoCompetitor/DoCompetitor";
import WorkWithUs from "../AdvertisingSolutions/WorkWithUs/WorkWithUs";

const Kurumsal = () => {
  return (
    <div>
      <NavBar />
      <KurumsalFeature />
      <BrandPage />
      <Strengthen />
      <Communicate />
      <YouDrive />
      <DoCompetitor />
      <BrandsWeWork />
      <WorkWithUs />
      <Footer />
    </div>
  );
};

export default Kurumsal;
