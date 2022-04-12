import React from "react";
import NavBar from "../NavBar/NavBar";
import Birlikte from "./Birlikte/Birlikte";
import DegisimiSiz from "./DegisimiSiz/DegisimiSiz";
// import KurumsalBanner from './KurumsalBanner/KurumsalBanner';
import KurumsalFeature from "./KurumsalFeature/KurumsalFeature";
import KurumsalOnline from "./KurumsalOnline/KurumsalOnline";
import MarkaSayfasi from "./MarkaSayfasi/MarkaSayfasi";
import Musterilerinizle from "./Musterilerinizle/Musterilerinizle";
import RakipAnalizi from "./RakipAnalizi/RakipAnalizi";

const Kurumsal = () => {
  return (
    <div>
      <NavBar />
      {/* <KurumsalBanner/> */}
      <KurumsalFeature />
      <MarkaSayfasi />
      <KurumsalOnline />
      <Musterilerinizle/>
      <DegisimiSiz/>
      <RakipAnalizi/>
      <Birlikte/>
    </div>
  );
};

export default Kurumsal;
