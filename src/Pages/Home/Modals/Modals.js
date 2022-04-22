import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import pattern from "../../../images/pattern.png";
import logoMini from "../../../images/logo-mini.svg";
import "./Modals.css";
const Modals = () => {
  const values = [true];
  const [show, setShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  return (
    <>
      {values.map((v, idx) => (
        <Button
          key={idx}
          className="modal-button"
          onClick={() => handleShow(v)}>
          Login / Register
          {typeof v === "string" && `below ${v.split("-")[0]}`}
        </Button>
      ))}
      <Modal
        show={show}
        fullscreen={fullscreen}
        onHide={() => setShow(false)}
        className="modals">
        <Modal.Body>
          <div className="row modal-body">
            <div className="col-lg-3 pattern-img-container">
              <img src={pattern} className="pattern-img" alt="" />
              {/* <h1>lshfs </h1> */}
            </div>
            <div className="col-lg-9 sign-in-container">
              <img src={logoMini} className="logo-mini" alt="" />
              <div className="sign-in-header">
                <h4>Giriş Yap</h4>
                <button className="new-sign-up-btn">
                  Hesabınız yok mu? Üye Ol.
                </button>
              </div>
              <div className="btn-container">
                <button className="facebook-btn">
                  <i class="fa-brands fa-facebook"></i> Facebook ile Giriş Yap
                </button>
                <button className="google-btn">
                  <i class="fa-brands fa-google"> </i>Google ile Giriş Yap
                </button>
              </div>
              <input
                type="email"
                name=""
                id=""
                className="input-email"
                placeholder="E-posta veya GSM No"
              />{" "}
              <br />
              <input
                type="password"
                name=""
                id=""
                className="input-password"
                placeholder="Şifre (En az 8 Karakter)"
              />
              <button type="submit" id="sign-in">
                Giriş Yap
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Modals;
