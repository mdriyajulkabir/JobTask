import React from "react";
import { NavLink } from "react-router-dom";
import "./Tuketici.css";
const Tuketici = () => {
  return (
    <div className="tuketici-container">
      <div className="w-75 mx-auto ">
        <h1>Tüketici deneyimi, sizin markanız</h1>
        <h5>
          Olumsuz alışveriş deneyimi yaşayan müşteriler, bu süreci 250 kişiyle
          paylaşıyor. <br />
          Müşteri odaklı kültürün parçası olmak ve mutlu müşteriler yaratmak
          için:
        </h5>
        <NavLink to='/kurumsal-uyelik'><button>Birlikte çalışalım</button></NavLink>
      </div>
    </div>
  );
};

export default Tuketici;
