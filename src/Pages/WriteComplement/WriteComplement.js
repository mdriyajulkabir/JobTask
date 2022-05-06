// import { Tab } from "bootstrap";
import React from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";
import avater from "../../images/avatar.png";
import "./WriteComplement.css";
import Modals from "../Home/Modals/Modals";
const WriteComplement = () => {
  return (
    <div className="sikayetyaz-container">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <div className="row sikayetyaz-div">
          <div className="col-12 col-lg-4 sikayetyaz-tab-container">
            <NavLink
              to="/"
              className={(navinfo) =>
                navinfo.isActive ? "active" : "unactive"
              }>
              <img src={logo} className="header-img logo-img" alt="" />
            </NavLink>{" "}
            <br />
            <i class="fa-solid fa-pencil edit-icon"></i> <br />
            <h1 className="sikayetyaz-header">Create Complement</h1>
            <Row>
              <Col sm={12}>
                <Nav className="flex-column tab-container">
                  <Nav.Item className=" ">
                    <Nav.Link eventKey="first" className=" nav-active ">
                      <div className="tab-name">
                        <span className="tab-number">1</span> <span id="complain-detail">Complaint Detail</span>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second" className="w-100 nav-active">
                      <div className="tab-name">
                        <span className="tab-number">2</span> Title
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third" className="w-100 nav-active">
                      <div className="tab-name">
                        <span className="tab-number">3</span> Brand
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth" className="w-100 nav-active">
                      <div className="tab-name">
                        <span className="tab-number">4</span> Document
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>
          </div>
          <div className="col-lg-8 col-12 sikayetyaz-input-container">
            <div className="sikayetyaz-navlink-container">
              <div className="model-avatar">
                <img src={avater} alt="" />
                <Modals className="modal-sik" />
              </div>
              <div className="navlink-container">
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
              </div>
            </div>
            <h5>Complaints Details</h5>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <textarea
                  name=""
                  className="sikayetyaz-text-area"
                  id=""
                  cols="30"
                  rows="10"></textarea>
                <div className="sikayetyaz-btn-div">
                  <button type="submit" className="sikayetyaz-btn">
                    Devam Et
                  </button>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <input type="text" className="sikayetyaz-input" />
                <div className="sikayetyaz-btn-div">
                  <button type="submit" className="sikayetyaz-btn">
                    Devam Et
                  </button>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <textarea
                  name=""
                  className="sikayetyaz-text-area"
                  id=""
                  cols="30"
                  rows="10"></textarea>
                <div className="sikayetyaz-btn-div">
                  <button type="submit" className="sikayetyaz-btn">
                    Devam Et
                  </button>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <input type="text" className="sikayetyaz-input" />
                <div className="sikayetyaz-btn-div">
                  <button type="submit" className="sikayetyaz-btn">
                    Devam Et
                  </button>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </div>
        </div>
      </Tab.Container>
    </div>
  );
};

export default WriteComplement;
