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
            <div className="col-lg-9 col-12 col-md-12 col-sm-12 sign-in-container">
              <img src={logoMini} className="logo-mini" alt="" />
              <div className="sign-in-header">
                <h4>Login</h4>
                <button className="new-sign-up-btn">
                  Don't have an account? Sign up.
                </button>
              </div>
              <div className="btn-container">
                <button className="facebook-btn">
                  <i class="fa-brands fa-facebook"></i> login with Facebook{" "}
                </button>
                <button className="google-btn">
                  <i class="fa-brands fa-google"> </i> Sign in with google
                </button>
              </div>
              <input
                type="email"
                name=""
                id=""
                className="input-email"
                placeholder="Email or GSM No"
              />{" "}
              <br />
              <input
                type="password"
                name=""
                id=""
                className="input-password"
                placeholder="Password (Minimum 8 Characters)"
              />
              <button type="submit" id="sign-in">
                Login
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Modals;
