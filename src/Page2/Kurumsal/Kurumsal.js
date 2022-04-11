import React from "react";
import NavBar from "../NavBar/NavBar";
// import KurumsalBanner from './KurumsalBanner/KurumsalBanner';
import KurumsalFeature from "./KurumsalFeature/KurumsalFeature";
import KurumsalOnline from "./KurumsalOnline/KurumsalOnline";
import MarkaSayfasi from "./MarkaSayfasi/MarkaSayfasi";
import Musterilerinizle from "./Musterilerinizle/Musterilerinizle";

const Kurumsal = () => {
  return (
    <div>
      <NavBar />
      {/* <KurumsalBanner/> */}
      <KurumsalFeature />
      <MarkaSayfasi />
      <KurumsalOnline />
      <Musterilerinizle/>
    </div>
  );
};

export default Kurumsal;
