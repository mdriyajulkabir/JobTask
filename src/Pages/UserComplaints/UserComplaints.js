import React from "react";
import Footer from "../Home/Footer/Footer";
import Header from "../Home/Header/Header";
import "./UserComplaints.css";
import logo from "../../images/AutoPlaySlider/3eb34c14ca8a8cf8777f861afd570cc0_50x50.jpg";
const UserComplaints = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row justify-contain-center align-items-center brand-logo">
          <div className="col-1">
            <img className="img-fluid rounded-circle" src={logo} alt="" />
          </div>
          <div className="col-9">
            <h5>Heri</h5>
          </div>
        </div>
        <div>
          <div
            className="btn-group"
            role="group"
            aria-label="Basic radio toggle button group">
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio1"
              autocomplete="off"
              checked
            />
            <label
              className="btn btn-outline-primary rounded-pill mx-3 px-4"
              for="btnradio1">
              Complaints(1)
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio2"
              autocomplete="off"
            />
            <label
              className="btn btn-outline-primary rounded-pill mx-3 px-3"
              for="btnradio2">
              Complaints Wrote Comments(0)
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio3"
              autocomplete="off"
            />
            <label
              className="btn btn-outline-primary rounded-pill mx-3 px-3"
              for="btnradio3">
              Supported Complaints(0)
            </label>
          </div>
        </div>
        <div>
          <div className="user-complaints-post-container">
            <div className="d-flex">
              <img src={logo} className="user-complaints-post-img" alt="" />
              <div>
                <div className="d-flex">
                  <h5 className="me-3 user-complaints-post-owner">Halite</h5>
                  {/* <div className="d-flex align-items-start">
                    <img src={reply} className="pt-2 pe-2" alt="" />
                    <span className="user-complaints-post-from">{post.from}</span>
                  </div> */}
                </div>
                <p className="user-complaints-post-time">
                  <span>1500 views, </span> 1 day ago
                </p>
              </div>
            </div>
            <h2 className="user-complaints-post-title">
              My Birevi Postponed My Delivery!
            </h2>
            <h5 className="user-complaints-post-description">
              I was going to buy a house. I've been paying for a year and a
              half, while they were supposed to delivery in May, April was
              delayed for 6 months. They said yours is not clear yet...
            </h5>
            <a href="#readmore" className="user-complaints-post-read-more">
              Read more
            </a>
            <br /> <br />
            <hr />
            <div className="d-flex justify-content-between user-complaints-post-like-comment">
              <h5>
                <i class="fa-regular fa-thumbs-up"></i>
                support
              </h5>
              <h5>
                <i class="fa-regular fa-comment"></i>
                Comment
              </h5>
              <h5>
                <i class="fa-regular fa-bookmark"></i>
                Save
              </h5>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserComplaints;
