import React from "react";
import NewComparison from "../../Complaints/NewComparison/NewComparison";
import Header from "../../Home/Header/Header";
import Brand from "./ProductCompareSubComponent/Brands/Brand";
import Complaints from "./ProductCompareSubComponent/Complaints/Complaints";
import CustomerHappiness from "./ProductCompareSubComponent/CustomerHappiness/CustomerHappiness";
import DisSatisfaction from "./ProductCompareSubComponent/DisSatisfaction/DisSatisfaction";
import Overview from "./ProductCompareSubComponent/Overview/Overview";
import Satisfaction from "./ProductCompareSubComponent/Satisfaction/Satisfaction";
import samsung from "../../../images/samsungLogo.jpg";
import oppo from "../../../images/oppoLogo.jpg";
import "./ProductCompare.css";
import Footer from "../../Home/Footer/Footer";
const ProductCompare = () => {
  return (
    <>
      <Header />
      <div className="mx-lg-5 mx-md-4 mx-sm-3 mx-2">
        <div className="my-3">
          <p>
            Home Page &nbsp; &gt; &nbsp; Compare &nbsp; &gt; &nbsp; Samsung Vs
            Oppo
          </p>
        </div>
        <div className="product-compare-header my-5">
          <h1>
            <span>Samsung</span> &nbsp; VS <span> &nbsp; Oppo</span>
          </h1>
        </div>
        <hr />
        <div className="row w-100 my-5 py-4">
          <div className="col-lg-8 col-md-12 col-12">
            <Brand />
            {/************** Over View ****************/}
            <Overview />
            {/***********Complaints **********/}
            <Complaints />
            {/* ******* Customer Happiness ************ */}
            <CustomerHappiness />
            {/********** Reasons For Satisfaction *********/}
            <Satisfaction />
            {/* Resons For Dissatisfaction */}
            <DisSatisfaction />

            <div className="mt-5 ">
              <h3 className="my-5">Which is you choice?</h3>
              <div className="row w-100">
                <div className="col-lg-5 col-md-4 col-12  ">
                  <div className="d-flex align-items-center justify-content-between compare-select-product">
                    <input type="checkbox" name="" id="compare-product-1" />
                    <img src={samsung} alt="" />
                    <h5>Samsung</h5>
                  </div>
                </div>
                <div className="col-lg-5 col-md-4 col-12  ">
                  <div className="d-flex align-items-center justify-content-between compare-select-product">
                    <input type="checkbox" name="" id="compare-product-1" />
                    <img src={oppo} alt="" />
                    <h5>Oppo</h5>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-12 d-flex align-items-center justify-content-center">
                  <button className="compare-send-btn">Send</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-12">
            <div className="product-compare-share">
              <p>Share</p>
              <p>
                <i class="fa-brands fa-twitter"></i>
              </p>
              <p>
                <i class="fa-brands fa-facebook"></i>
              </p>
              <p>
                <i class="fa-brands fa-linkedin"></i>
              </p>
              <p>
                <i class="fa-solid fa-link"></i>
              </p>
            </div>

            {/***********  New Comparison ***********/}
            <NewComparison />
          </div>
        </div>
        <h5 className="mb-5">
          Every day, hundreds of thousands of people come to complain before
          shopping. Here he decides which brand to choose. Compare the
          performances of brands in customer satisfaction and complaint
          management , and make your decision easily.
        </h5>
        <Footer />
      </div>
    </>
  );
};

export default ProductCompare;
