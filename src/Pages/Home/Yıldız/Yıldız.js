import React, { useEffect, useState } from "react";
import Item from "./Item/Item";
import "./Yildiz.css";
const Yıldız = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("output.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div className="yiliz-container">
      <h1>Yıldız Sıralaması</h1>
      <div className="d-flex align-items-center justify-content-center">
        <select class="form-select w-25" id="inputGroupSelect02">
          <option selected>Choose</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <div class="form-check check-div">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            checked
          />
          <label class="form-check-label" for="flexRadioDefault1">
            Son 1 Yil
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
            Tüm Zamanlar
          </label>
        </div>
      </div>
      <p>
        Bu sıralama, firmaların büyüklükleri, şikayet sayıları ve şikayet
        oranlarından bağımsız olarak sadece <br /> şikayetçi memnuniyeti
        puanlarına göre yapılmaktadır.
      </p>
      <div className="item-div">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
      <button>Devamını Göster</button>
    </div>
  );
};

export default Yıldız;
