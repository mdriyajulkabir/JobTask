import React from "react";
import "./AllComplaints.css";
import { Dropdown, DropdownButton, Form } from "react-bootstrap";
import SingleCompleints from "../SingleCompleints/SingleCompleints";
const AllComplaints = () => {
  
  return (
    <div className="">
      <div className="row w-100">
        <div className="col-lg-8 col-sm-12 order-lg-0 order-1">
          <div className="d-flex align-items-center mt-5 ms-5 tum-sikayetler-header">
            <h1>All Complaints</h1>
            <h5>9.012.094 complaints</h5>
          </div>
          <hr className="ms-5" />
          {/*^^^^^^^^^^^^^^ Single Compleints ^^^^^^^^^^^^^^^^^^^*/}
          <SingleCompleints/>
        </div>

        {/* filter section */}
        <div className="col-lg-4 col-sm-12 p-3 order-lg-1 order-0">
          <div className="filter-container">
            <div className="position-relative">
              <input
                type="text"
                placeholder="Search within complaints"
                className="filter-search"
              />
              <button type="submit" className="filter-submit-btn">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            <div className="text-white d-flex align-items-center my-4">
              <i class="fa-solid fa-filter me-3"></i>
              <h3>Filter</h3>
            </div>
            <Form.Check
              type="checkbox"
              id="default-checkbox"
              label="Resolved Complaints"
              style={{ color: "#656374", fontWeight: 600, fontSize: "20px" }}
            />
            <Form.Check
              type="checkbox"
              id="default-checkbox"
              label="video Complaints"
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
              label="Photo Complaints"
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
                <h3 className="ms-3">Sort by</h3>
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

export default AllComplaints;
