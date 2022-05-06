import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../../images/logoBlack.svg";
import edit from "../../../images/Page2_img/edit-white.svg"
import Modals from "../Modals/Modals";
import "./Header.css";
const Header = () => {
  return (
    <div className="sticky-top">
      <Navbar bg="light" expand="lg">
        <NavLink id="header-img-div"
          to="/"
          className={(navinfo) => (navinfo.isActive ? "actives" : "unactive")}>
          <img src={logo} className="header-img" alt="" />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              to="/sikayetler"
              className={(navinfo) =>
                navinfo.isActive ? "actives" : "unactive"
              }>
              Complaints
            </NavLink>

            <NavLink
              to="/karsilastir"
              className={(navinfo) =>
                navinfo.isActive ? "actives" : "unactive"
              }>
              Compare Brands
            </NavLink>
            <NavLink
              to="/trend-100" id="compare-brands-nav"
              className={(navinfo) =>
                navinfo.isActive ? "actives" : "unactive"
              }>
              Trend 100
            </NavLink>
           
          </Nav>
          <div className="nav-right-link">
            <Modals />
            <NavLink id="write-complement"
              to="/sikayetyaz"
              className={(navinfo) =>
                navinfo.isActive ? "actives" : "unactive"
              }>
<img src={edit} className="me-2" alt="" />
              Write A Complaint
            </NavLink>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
