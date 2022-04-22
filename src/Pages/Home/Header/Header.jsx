import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../../images/logoBlack.svg";
import Modals from "../Modals/Modals";
import "./Header.css";
const Header = () => {
  return (
    <div className="sticky-top">
      <Navbar bg="light" expand="lg">
        <NavLink
          to="/"
          className={(navinfo) => (navinfo.isActive ? "active" : "unactive")}>
          <img src={logo} className="header-img" alt="" />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              to="/sikayetler"
              className={(navinfo) =>
                navinfo.isActive ? "active" : "unactive"
              }>
              Complaints
            </NavLink>

            <NavLink
              to="/karsilastir"
              className={(navinfo) =>
                navinfo.isActive ? "active" : "unactive"
              }>
              Compare Brands
            </NavLink>
            <NavLink
              to="/trend-100"
              className={(navinfo) =>
                navinfo.isActive ? "active" : "unactive"
              }>
              Trend 100
            </NavLink>
          </Nav>
          <div className="nav-right-link">
            <Modals />
            <NavLink
              to="/sikayetyaz"
              className={(navinfo) =>
                navinfo.isActive ? "active" : "unactive"
              }>
              Write A Complaint
            </NavLink>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
