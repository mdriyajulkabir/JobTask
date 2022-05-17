import React from "react";
import BrandSection from "./ProductSolutionSubComponents/BrandSection";
import Solution from "./ProductSolutionSubComponents/Solution";
import ProductFilters from "./ProductSolutionSubComponents/ProductFilters";
import ProductComparison from "./ProductSolutionSubComponents/ProductComparison";
import Header from "../Home/Header/Header";
import Footer from "../Home/Footer/Footer";

function ProductComparePage() {
  return (
    <>
    <Header/>
      <div className="mx-2">
        <BrandSection />
        <div className="row w-100">
          <div className="col-12 col-lg-8 col-md-7">
            <Solution />
            <Solution />
            <Solution />
            <Solution />
            <Solution />
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#s" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#s">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#s">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#s">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#a" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-12 col-lg-4 col-md-5">
            <ProductFilters />
            <ProductComparison />
          </div>
        </div>
      </div>

      <div className="bg-secondary p-4">
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button
                style={{
                  backgroundColor: "#ffffff78 !important",
                }}
                class="accordion-button collapsed bg-secondary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                first item's accordion body.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button
                style={{
                  backgroundColor: "#ffffff78 !important",
                }}
                class="accordion-button collapsed bg-secondary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                second item's accordion body. Let's imagine this being filled
                with some actual content.
              </div>
            </div>
          </div>
          <div class="accordion-item bg-white">
            <h2 class="accordion-header" id="flush-headingThree">
              <button
                style={{
                  backgroundColor: "#ffffff78 !important",
                }}
                class="accordion-button collapsed bg-secondary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make
                it look, at least at first glance, a bit more representative of
                how this would look in a real-world application.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default ProductComparePage;
