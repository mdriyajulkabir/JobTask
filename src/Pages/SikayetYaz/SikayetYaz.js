// import { Tab } from "bootstrap";
import React from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";
import avater from "../../images/avatar.png";
import "./SikayetYaz.css";
import Modals from "../Home/Modals/Modals";
const SikayetYaz = () => {
  return (
    <div className="sikayetyaz-container">
      <Tab.Container id="left-tabs-example" defaultActiveKey="second">
        <div className="row w-100">
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
            <h1 className="sikayetyaz-header">Şikayet Oluştur</h1>
            <Row>
              <Col sm={7}>
                <Nav className="flex-column tab-container">
                  <Nav.Item className=" ">
                    <Nav.Link eventKey="first" className=" nav-active">
                      <div className="tab-name">
                      <span className="tab-number">1</span> Şikayet 
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second" className="w-100 nav-active">
                      <div className="tab-name">
                      <span className="tab-number">2</span> Başlık
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third" className="w-100 nav-active">
                      <div className="tab-name">
                      <span className="tab-number">3</span> Marka
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth" className="w-100 nav-active">
                      <div className="tab-name">
                      <span className="tab-number">4</span> Belge
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
                  Şikayetler
                </NavLink>
                <NavLink
                  to="/karsilastir"
                  className={(navinfo) =>
                    navinfo.isActive ? "active" : "unactive"
                  }>
                  Marka Karşılaştır
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
            <h5>Şikayet Oluştur</h5>
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

export default SikayetYaz;
