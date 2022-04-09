import React from "react";
import NavBar from "../NavBar/NavBar";
// import KurumsalBanner from './KurumsalBanner/KurumsalBanner';
import KurumsalFeature from "./KurumsalFeature/KurumsalFeature";
import MarkaSayfasi from "./MarkaSayfasi/MarkaSayfasi";

const Kurumsal = () => {
  return (
    <div>
      <NavBar />
      {/* <KurumsalBanner/> */}
      <KurumsalFeature />
      <MarkaSayfasi />
    </div>
  );
};

export default Kurumsal;
