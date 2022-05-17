import React from "react";
import img24 from "../../../../../images/24img.svg";
import comment from "../../../../../images/comments.svg";
import like from "../../../../../images/like.svg";
import eye from "../../../../../images/eye (1).svg";
import "./Complaints.css";
const Complaints = () => {
  return (
    <div>
      <h2 className="py-4">Complaints</h2>
      <table className="table">
        <tbody>
          <tr>
            <th scope="row">
              <p>Latest</p>
              <br />
              <img src={img24} alt="" />
            </th>
            <td>
              <p>07 May 22:44</p>
              <p>
                35 days after receiving the machine, they said it was a boiler
                failure in the system. Hadquaters directs him to the service and
                says thet it is not authorized to exchange since 30 days have
                passed.
              </p>
              <button type="button" class="btn btn-link complaints-read-btn">
                Read more
              </button>
            </td>
            <td>
              <p>07 May 22:44</p>
              <p>
                35 days after receiving the machine, they said it was a boiler
                failure in the system. Hadquaters directs him to the service and
                says thet it is not authorized to exchange since 30 days have
                passed.
              </p>
              <button type="button" class="btn btn-link complaints-read-btn">
                Read more
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <p>Most Commented</p>
              <br />
              <img src={comment} alt="" />
            </th>
            <td>
              <p>13 Comments</p>

              <p>
                35 days after receiving the machine, they said it was a boiler
                failure in the system. Hadquaters directs him to the service and
                says thet it is not authorized to exchange since 30 days have
                passed.
              </p>
              <button type="button" class="btn btn-link complaints-read-btn">
                Read more
              </button>
            </td>
            <td>
              <p>9 Comments</p>
              <p>
                35 days after receiving the machine, they said it was a boiler
                failure in the system. Hadquaters directs him to the service and
                says thet it is not authorized to exchange since 30 days have
                passed.
              </p>
              <button type="button" class="btn btn-link complaints-read-btn">
                Read more
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <p>Most Supported</p>
              <br />
              <img src={like} alt="" />
            </th>
            <td>
              <p>46 Supporters</p>
              <p>
                35 days after receiving the machine, they said it was a boiler
                failure in the system. Hadquaters directs him to the service and
                says thet it is not authorized to exchange since 30 days have
                passed.
              </p>
              <button type="button" class="btn btn-link complaints-read-btn">
                Read more
              </button>
            </td>
            <td>
              <p>15 Supporters</p>
              <p>
                35 days after receiving the machine, they said it was a boiler
                failure in the system. Hadquaters directs him to the service and
                says thet it is not authorized to exchange since 30 days have
                passed.
              </p>
              <button type="button" class="btn btn-link complaints-read-btn">
                Read more
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <p>Mose Read</p>

              <br />
              <img src={eye} alt="" />
            </th>
            <td>
              <p>30,413 Views</p>
              <p>
                35 days after receiving the machine, they said it was a boiler
                failure in the system. Hadquaters directs him to the service and
                says thet it is not authorized to exchange since 30 days have
                passed.
              </p>
              <button type="button" class="btn btn-link complaints-read-btn">
                Read more
              </button>
            </td>
            <td>
              <p>14,597 Views</p>
              <p>
                35 days after receiving the machine, they said it was a boiler
                failure in the system. Hadquaters directs him to the service and
                says thet it is not authorized to exchange since 30 days have
                passed.
              </p>
              <button type="button" class="btn btn-link complaints-read-btn">
                Read more
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Complaints;
