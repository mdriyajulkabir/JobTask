import React, { useEffect, useState } from "react";
import Item from "./Item/Item";
import "./StarRanking.css";
const StarRanking = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("output.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div className="yiliz-container">
      <h1>Star Ranking</h1>
      <div className="select-input-container">
        <select class="form-select select-input-form" id="inputGroupSelect02">
          <option selected>Choose</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <div className="check-container">
          <div class="form-check check-div">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Last 1 Year
            </label>
          </div>

          <div class="form-check check-div">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label class="form-check-label" for="flexRadioDefault2">
              All Times
            </label>
          </div>
        </div>
      </div>
      <p>
        This ranking is made only according to the complainant satisfaction
        scores, regardless of the size <br /> of the companies, the number of
        complaints and the complaint rates.
      </p>
      <div className="item-div">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
      <button>Show More</button>
    </div>
  );
};

export default StarRanking;
