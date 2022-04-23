import React from "react";
import desktopResult from "../../../images/Page2_img/desktop-row-search-result.png";
import "./BrandPage.css";
const BrandPage = () => {
  return (
    <div>
      <div className="row w-100 kurumsal-marka-container">
        <div className="col-12 col-lg-6 kurumsal-marka-des-div order-1 order-md-0 order-lg-0">
          <h4 className="kurumsal-marka-header">Brand Page</h4>
          <h1 className="kurumsal-marka-title w-75">
            Get Attention in Search results
          </h1>
          <p className="kurumsal-marka-p">
          The complaint brand page appears at the top of the search results and millions of people visit the site every month.
          </p>
        </div>
        <div className="col-12 col-lg-6 order-0 order-md-1 order-lg-1">
          <img
            src={desktopResult}
            alt=""
            className="marka-sayfasi-img img-fluid"
            title="Arama Sonuçlarında Dikkat Çekin"
          />
        </div>
      </div>
    </div>
  );
};

export default BrandPage;
