import React from "react";
import { NavLink } from "react-router-dom";
import "./Tuketici.css";
const Tuketici = () => {
  return (
    <div className="tuketici-container">
      <div className="w-75 mx-auto ">
        <h1>Consumer experience, your brand</h1>
        <h5>
        Customers who have had a negative shopping experience share this process with 250 people. <br />
        To be a part of a customer-oriented culture and create happy customers:
          
        </h5>
        <NavLink to='/kurumsal-uyelik'><button>Let's Study Together</button></NavLink>
      </div>
    </div>
  );
};

export default Tuketici;
