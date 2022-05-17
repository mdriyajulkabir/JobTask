import React from "react";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";
import samsung from "../../.././../../images/samsungLogo.jpg";
import oppo from "../../.././../../images/oppoLogo.jpg";
import "./Brand.css";
const Brand = () => {
  return (
    <div className="row w-100">
      <div className="col-lg-2 col-md-12 col-12">
        <h3 className="mb-4">Brands</h3>
      </div>
      <div className="col-lg-4 col-md-6 col-12">
        <div className="brand-div">
          <div className="brand-img-div">
            <div className="brand-img">
              <img src={samsung} alt="" />
            </div>
          </div>
          <div className="brand-des-div">
            <h5>
              Samsung <i class="fa-solid fa-circle-check"></i>
            </h5>
            <h6>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i> &nbsp; 2.2
              <OverlayTrigger
                key="bottom"
                placement="bottom"
                overlay={
                  <Popover>
                    <Popover.Header as="h3">Hey you</Popover.Header>
                    <Popover.Body>
                      <strong>Holy guacamole!</strong> Check this info.
                    </Popover.Body>
                  </Popover>
                }>
                <Button variant="secondar">
                  <i class="fa-solid fa-circle-info"></i>
                </Button>
              </OverlayTrigger>
            </h6>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-12 ">
        <div className="brand-div">
          <div className="brand-img-div">
            <div className="brand-img">
              <img src={oppo} alt="" />
            </div>
          </div>
          <div className="brand-des-div">
            <h5>
              Samsung <i class="fa-solid fa-circle-check"></i>
            </h5>
            <h6>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i> &nbsp; 2.2
              <OverlayTrigger
                key="bottom"
                placement="bottom"
                overlay={
                  <Popover>
                    <Popover.Header as="h3">Hey you</Popover.Header>
                    <Popover.Body>
                      <strong>Holy guacamole!</strong> Check this info.
                    </Popover.Body>
                  </Popover>
                }>
                <Button variant="secondar">
                  <i class="fa-solid fa-circle-info"></i>
                </Button>
              </OverlayTrigger>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
