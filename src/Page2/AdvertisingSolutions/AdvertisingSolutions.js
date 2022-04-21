import React from "react";
import Footer from "../../Pages/Home/Footer/Footer";
import NavBar from "../NavBar/NavBar";
import AdvertisingModels from "./AdvertisingModels/AdvertisingModels";
import AdvertisingNumber from "./AdvertisingNumber/AdvertisingNumber";
import BusinessPartnership from "./BusinessPartnership/BusinessPartnership";
import Complaints from "./Complaints/Complaints";
import WorkWithUs from "./WorkWithUs/WorkWithUs";

const AdvertisingSolutions = () => {
  return (
    <div>
      <NavBar />
      <AdvertisingNumber />
      <Complaints />
      <BusinessPartnership />
      <AdvertisingModels/>
      <WorkWithUs/>
      <Footer/>
    </div>
  );
};

export default AdvertisingSolutions;
