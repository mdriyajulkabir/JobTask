import React from "react";
import "./Satisfaction.css";
const Satisfaction = () => {
  return (
    <div>
      <h2 className="py-4">Reasons for Satisfaction</h2>
      <table className="table">
        <tbody>
          <tr>
            <th scope="row">
              <p>Relevant and responsible approached</p>
            </th>
            <td className="w-50">
              <div class="progress" style={{ height: "14px" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "40%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100">
                  27%
                </div>
              </div>
            </td>
            <td className="w-50">
              <div class="progress" style={{ height: "14px" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "40%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100">
                  27%
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <p>Staff behavior was good</p>
            </th>
            <td className="w-50">
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
            <td className="w-50">
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
              <p>They fixed my problem</p>
            </th>
            <td className="w-50">
              <div class="progress" style={{ height: "14px" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "40%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100">
                  27%
                </div>
              </div>
            </td>
            <td className="w-50">
              <div class="progress" style={{ height: "14px" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "40%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100">
                  27%
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <p>Communication/resolution timing was good</p>
            </th>
            <td className="w-50">
              <div class="progress" style={{ height: "14px" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "40%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100">
                  27%
                </div>
              </div>
            </td>
            <td className="w-50">
              <div class="progress" style={{ height: "14px" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "40%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100">
                  27%
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <p>Other</p>
            </th>
            <td className="w-50">
              <div class="progress" style={{ height: "14px" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "40%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100">
                  27%
                </div>
              </div>
            </td>
            <td className="w-50">
              <div class="progress" style={{ height: "14px" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "40%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100">
                  27%
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Satisfaction;
