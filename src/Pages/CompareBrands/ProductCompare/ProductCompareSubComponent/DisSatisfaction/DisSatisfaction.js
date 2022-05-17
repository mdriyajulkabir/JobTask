import React from "react";
import "./DisSatisfaction.css";
const DisSatisfaction = () => {
  return (
    <div>
      <h2 className="py-4">Reasons For Dissatisfaction</h2>
      <table className="table">
        <tbody>
          <tr>
            <th scope="row" className="dissatisfaction-th">
              <p>Couldn't offer a solution</p>
            </th>
            <td className="dissatisfaction-td">
              <div class="progress" style={{ height: "14px" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100">
                  80%
                </div>
              </div>
            </td>
            <td className="dissatisfaction-td">
              <div class="progress" style={{ height: "14px" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100">
                  75%
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <p>The process took too long</p>
            </th>
            <td className="dissatisfaction-td">
              <div class="progress" style={{ height: "14px" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "67%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100">
                  67%
                </div>
              </div>
            </td>
            <td className="dissatisfaction-td">
              <div class="progress" style={{ height: "14px" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "62%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100">
                  62%
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <p>Don't meet my expectation</p>
            </th>
            <td className="dissatisfaction-td">
              <div class="progress" style={{ height: "14px" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100">
                  50%
                </div>
              </div>
            </td>
            <td className="dissatisfaction-td">
              <div class="progress" style={{ height: "14px" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "45%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100">
                  45%
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <p>Staff behavior</p>
            </th>
            <td className="dissatisfaction-td">
              <div class="progress" style={{ height: "14px" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100">
                  25%
                </div>
              </div>
            </td>
            <td className="dissatisfaction-td">
              <div class="progress" style={{ height: "14px" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "29%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100">
                  29%
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <p>They did not contact</p>
            </th>
            <td className="dissatisfaction-td">
              <div class="progress" style={{ height: "14px" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "20%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100">
                  20%
                </div>
              </div>
            </td>
            <td className="dissatisfaction-td">
              <div class="progress" style={{ height: "14px" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "24%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100">
                  24%
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <p>Other</p>
            </th>
            <td className="dissatisfaction-td">
              <div class="progress" style={{ height: "14px" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "4%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100">
                  4%
                </div>
              </div>
            </td>
            <td className="dissatisfaction-td">
              <div class="progress" style={{ height: "14px" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "7%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100">
                  7%
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DisSatisfaction;
