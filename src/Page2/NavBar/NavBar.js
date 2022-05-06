import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../images/logoBlack.svg";
const NavBar = () => {
  return (
    <div className="sticky-top">
      <Navbar bg="light" expand="lg">
        <NavLink
          to="/"
          className={(navinfo) => (navinfo.isActive ? "actives" : "unactive")}>
          <img src={logo} className="header-img" alt="" />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              to="/kurumsal-uyelik"
              className={(navinfo) =>
                navinfo.isActive ? "actives" : "unactive"
              }>
              Corporate Membership
            </NavLink>

            <NavLink
              to="/reklam-cozumleri"
              className={(navinfo) =>
                navinfo.isActive ? "actives" : "unactive"
              }>
              Advertising Solutions
            </NavLink>
            <NavLink
              to="/ace-odulleri"
              className={(navinfo) =>
                navinfo.isActive ? "actives" : "unactive"
              }>
              Ace Rewards
            </NavLink>
          </Nav>
          <div className="nav-right-link">
            <NavLink
              to="/sikayetyaz"
              className={(navinfo) =>
                navinfo.isActive ? "actives" : "unactive"
              }>
              Write A Complaint
            </NavLink>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
