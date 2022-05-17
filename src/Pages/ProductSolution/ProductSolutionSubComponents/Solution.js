import React from "react";
import "./solution.css";
import logo from "../../../images/AutoPlaySlider/3eb34c14ca8a8cf8777f861afd570cc0_50x50.jpg"
function Solution() {
  return (
    <>
      <div className="post-container">
        <div className="d-flex">
          <img src={logo} className="post-img" alt="" />
          <div>
            <div className="d-flex">
              <h5 className="me-3 post-owner">Halite</h5>
              {/* <div className="d-flex align-items-start">
                <img src={reply} className="pt-2 pe-2" alt="" />
                <span className="post-from">{post.from}</span>
              </div> */}
            </div>
            <p className="post-time">
              <span>1500 views, </span> 1 day ago
            </p>
          </div>
        </div>
        <h2 className="post-title">My Birevi Postponed My Delivery!</h2>
        <h5 className="post-description">
          I was going to buy a house. I've been paying for a year and a half,
          while they were supposed to delivery in May, April was delayed for 6
          months. They said yours is not clear yet...
        </h5>
        <a href="#readmore" className="post-read-more">
          Read more
        </a>
        <br /> <br />
        <hr />
        <div className="d-flex justify-content-between post-like-comment">
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
    </>
  );
}

export default Solution;
