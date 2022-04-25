import React from "react";
import rankUp from "../../../../images/rank-up.svg";
import "./Item.css";
const Item = (props) => {
  const { id, name, subName, img, rating } = props.item;
  return (
    <div className="item-container">
      <div className="row w-100">
        <div className="col-lg-1 col-sm-1 col-1 position-div">
          <div className="position-bg">
            <img src={rankUp} alt="" />
          </div>
        </div>
        <div className="col-lg-2 col-sm-3 col-3 img-container">
          <img src={img} className="item-img" alt="" />
        </div>
        <div className="col-lg-9 col-sm-8 col-8 item-details">
          <div className="item-owner-details">
            <h5>
              {id}. {name}
            </h5>
            <p>{subName}</p>
          </div>
          <div className="d-flex">
            <div className="pe-2">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <h6>{rating}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
