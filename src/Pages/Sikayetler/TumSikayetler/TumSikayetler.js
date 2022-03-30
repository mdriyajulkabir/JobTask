import React, { useEffect, useState } from "react";
import "./TumSikayetler.css";
import reply from "../../../images/AutoPlaySlider/reply.svg";
import { Dropdown, DropdownButton, Form } from "react-bootstrap";
const TumSikayetler = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("sikayetlerData.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div className="">
      <div className="row w-100">
        <div className="col-lg-8 col-sm-12 order-lg-0 order-1">
          <div className="d-flex align-items-center mt-5 ms-5 tum-sikayetler-header">
            <h1>Tüm Şikayetler</h1>
            <h5>9.012.094 şikayet</h5>
          </div>
          <hr className="ms-5" />
          <div>
            {posts.map((post) => (
              <div className="post-container">
                <div className="d-flex">
                  <img src={post.img} className="post-img" alt="" />
                  <div>
                    <div className="d-flex">
                      <h5 className="me-3 post-owner">{post.name}</h5>
                      <div className="d-flex align-items-start">
                        <img src={reply} className="pt-2 pe-2" alt="" />
                        <span className="post-from">{post.from}</span>
                      </div>
                    </div>
                    <p className="post-time">{post.time}</p>
                  </div>
                </div>
                <h2 className="post-title">{post.title}</h2>
                <h5 className="post-description">{post.description}</h5>
                <a href="#readmore" className="post-read-more">
                  Devamini Oku
                </a>
                <br /> <br />
                <hr />
                <div className="d-flex justify-content-between post-like-comment">
                  <h5>
                    <i class="fa-regular fa-thumbs-up"></i>
                    Destekle
                  </h5>
                  <h5>
                    <i class="fa-regular fa-comment"></i>
                    Yorum Yap
                  </h5>
                  <h5>
                    <i class="fa-regular fa-bookmark"></i>
                    Kaydet
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* filter section */}
        <div className="col-lg-4 col-sm-12 p-3 order-lg-1 order-0">
          <div className="filter-container">
            <div className="position-relative">
              <input type="text" className="filter-search" />
              <button type="submit" className="filter-submit-btn">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            <div className="text-white d-flex align-items-center my-4">
              <i class="fa-solid fa-filter me-3"></i>
              <h3>Filtrele</h3>
            </div>
            <Form.Check
              type="checkbox"
              id="default-checkbox"
              label="Çözülen Şikayetler"
              style={{ color: "#656374", fontWeight: 600, fontSize: "20px" }}
            />
            <Form.Check
              type="checkbox"
              id="default-checkbox"
              label="Videolu Şikayetler"
              style={{
                color: "#656374",
                fontWeight: 600,
                marginTop: "8px",
                fontSize: "20px",
              }}
            />
            <Form.Check
              type="checkbox"
              id="default-checkbox"
              label="Fotoğraflı Şikayetler"
              style={{
                color: "#656374",
                fontWeight: 600,
                marginTop: "8px",
                fontSize: "20px",
              }}
            />

            <div className="d-flex align-items-center justify-content-between mt-5">
              <div className="d-flex align-items-center text-white">
                <i class="fa-solid fa-arrow-down-wide-short"></i>
                <h3 className="ms-3">Sirala</h3>
              </div>
              <DropdownButton
                variant="outline-secondary"
                title="Dropdown &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; "
                id="input-group-dropdown-1"
                className="rounded-pill">
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TumSikayetler;
