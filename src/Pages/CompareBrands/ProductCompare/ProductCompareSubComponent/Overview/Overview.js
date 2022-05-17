import React from "react";

const Overview = () => {
  return (
    <div>
      <h2 className="py-4">Overview</h2>
      <table className="table text-secondary">
        <tbody>
          <tr>
            <th scope="row">Number of Complaints</th>
            <td>7,489</td>
            <td>7,386</td>
          </tr>
          <tr>
            <th scope="row">Answers</th>
            <td>7,438(%99)</td>
            <td>7052(%95)</td>
          </tr>
          <tr>
            <th scope="row">resolved</th>
            <td>1.198 (%16)</td>
            <td>2.403 (%33)</td>
          </tr>
          <tr>
            <th scope="row">Number of Acknowledgments</th>
            <td>931(%12)</td>
            <td>1.795(%24)</td>
          </tr>
          <tr>
            <th scope="row">Monthly Visitors</th>
            <td>110.442</td>
            <td>109.168</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Overview;
