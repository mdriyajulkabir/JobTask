import React, { useEffect, useState } from "react";
import "./Popular.css";
const Popular = () => {
  const [popularItems, setPopularItem] = useState([]);
  useEffect(() => {
    fetch("output.json")
      .then((res) => res.json())
      .then((data) => setPopularItem(data));
  }, []);
  return (
    <div>
      <h3 className="popular-header">Popular comparisons</h3>

      <div className=" row w-100 popular-card-container">
        <div className="col-xxl-9 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="row w-100 my-5">
            <div className="col-lg-6 col-md-12 col-sm-12 single-popular-card-div">
              <div className="single-popular-card">
                {popularItems.slice(0, 2).map((populars) => (
                  <div className="row w-100 pb-4 popular-item-div">
                    <div className="col-lg-4 col-md-2 col-4 popular-item-img-div">
                      <div style={{backgroundColor:"#fff", padding:"0px 5px", borderRadius:"10px"}}>
                      <img
                        src={populars.img}
                        className="img-fluid popular-item-img"
                        alt=""
                      />
                      </div>
                    </div>
                    <div className="col-lg-8 col-8 ps-4">
                      <h5>{populars.name}</h5>
                      <div className="d-flex ">
                        <div>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                        </div>
                        <p className="ps-3 popular-item-p">2.3</p>
                      </div>
                    </div>
                  </div>
                ))}
                <button type="submit" id="popular-btn">
                  compare
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 single-popular-card-div">
              <div className="single-popular-card">
                {popularItems.slice(2, 4).map((populars) => (
                  <div className="row w-100 pb-4 popular-item-div">
                    <div className="col-lg-4 col-4 popular-item-img-div">
                      <img
                        src={populars.img}
                        className="img-fluid popular-item-img"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-8 col-8 ps-4">
                      <h5>{populars.name}</h5>
                      <div className="d-flex ">
                        <div>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                        </div>
                        <p className="ps-3 popular-item-p">2.3</p>
                      </div>
                    </div>
                  </div>
                ))}
                <button type="submit" id="popular-btn">
                  compare
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 single-popular-card-div">
              <div className="single-popular-card">
                {popularItems.slice(3, 5).map((populars) => (
                  <div className="row w-100 pb-4 popular-item-div">
                    <div className="col-lg-4 col-4 popular-item-img-div">
                      <img
                        src={populars.img}
                        className="img-fluid popular-item-img"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-8 col-8 ps-4">
                      <h5>{populars.name}</h5>
                      <div className="d-flex ">
                        <div>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                        </div>
                        <p className="ps-3 popular-item-p">2.3</p>
                      </div>
                    </div>
                  </div>
                ))}
                <button type="submit" id="popular-btn">
                  compare
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 single-popular-card-div">
              <div className="single-popular-card">
                {popularItems.slice(4, 6).map((populars) => (
                  <div className="row w-100 pb-4 popular-item-div">
                    <div className="col-lg-4 col-4 popular-item-img-div">
                      <img
                        src={populars.img}
                        className="img-fluid popular-item-img"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-8 col-8 ps-4">
                      <h5>{populars.name}</h5>
                      <div className="d-flex ">
                        <div>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                        </div>
                        <p className="ps-3 popular-item-p">2.3</p>
                      </div>
                    </div>
                  </div>
                ))}
                <button type="submit" id="popular-btn">
                  compare
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 single-popular-card-div">
              <div className="single-popular-card">
                {popularItems.slice(5, 7).map((populars) => (
                  <div className="row w-100 pb-4 popular-item-div">
                    <div className="col-lg-4 col-4 popular-item-img-div">
                      <img
                        src={populars.img}
                        className="img-fluid popular-item-img"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-8 col-8 ps-4">
                      <h5>{populars.name}</h5>
                      <div className="d-flex ">
                        <div>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                        </div>
                        <p className="ps-3 popular-item-p">2.3</p>
                      </div>
                    </div>
                  </div>
                ))}
                <button type="submit" id="popular-btn">
                  compare
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 single-popular-card-div">
              <div className="single-popular-card">
                {popularItems.slice(6, 8).map((populars) => (
                  <div className="row w-100 pb-4 popular-item-div">
                    <div className="col-lg-4 col-4 popular-item-img-div">
                      <img
                        src={populars.img}
                        className="img-fluid popular-item-img"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-8 col-8 ps-4">
                      <h5>{populars.name}</h5>
                      <div className="d-flex ">
                        <div>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                        </div>
                        <p className="ps-3 popular-item-p">2.3</p>
                      </div>
                    </div>
                  </div>
                ))}
                <button type="submit" id="popular-btn">
                  compare
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 single-popular-card-div">
              <div className="single-popular-card">
                {popularItems.slice(7, 9).map((populars) => (
                  <div className="row w-100 pb-4 popular-item-div">
                    <div className="col-lg-4 col-4 popular-item-img-div">
                      <img
                        src={populars.img}
                        className="img-fluid popular-item-img"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-8 col-8 ps-4">
                      <h5>{populars.name}</h5>
                      <div className="d-flex ">
                        <div>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                        </div>
                        <p className="ps-3 popular-item-p">2.3</p>
                      </div>
                    </div>
                  </div>
                ))}
                <button type="submit" id="popular-btn">
                  compare
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 single-popular-card-div">
              <div className="single-popular-card">
                {popularItems.slice(0, 2).map((populars) => (
                  <div className="row w-100 pb-4 popular-item-div">
                    <div className="col-lg-4 col-4 popular-item-img-div">
                      <img
                        src={populars.img}
                        className="img-fluid popular-item-img"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-8 col-8 ps-4">
                      <h5>{populars.name}</h5>
                      <div className="d-flex ">
                        <div>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                        </div>
                        <p className="ps-3 popular-item-p">2.3</p>
                      </div>
                    </div>
                  </div>
                ))}
                <button type="submit" id="popular-btn">
                  compare
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
