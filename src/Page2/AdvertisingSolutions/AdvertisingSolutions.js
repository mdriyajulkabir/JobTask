import React from "react";
import NavBar from "../NavBar/NavBar";
import AdvertisingModels from "./AdvertisingModels/AdvertisingModels";
import AdvertisingNumber from "./AdvertisingNumber/AdvertisingNumber";
import BusinessPartnership from "./BusinessPartnership/BusinessPartnership";
import Complaints from "./Complaints/Complaints";

const AdvertisingSolutions = () => {
  return (
    <div>
      <NavBar />
      <AdvertisingNumber />
      <Complaints />
      <BusinessPartnership />
      <AdvertisingModels/>
    </div>
  );
};

export default AdvertisingSolutions;
