import React from "react";
import Header from "../../Home/Header/Header";
import user from "../../../images/avatar.png";
import "./ComplaintDetails.css";
import SingleCompleints from "../SingleCompleints/SingleCompleints";
import NewComparison from "../NewComparison/NewComparison";
import StatusComplaints from "../StatusComplaints/StatusComplaints";
import Footer from "../../Home/Footer/Footer";
const ComplaintDetails = () => {
  return (
    <>
      <Header />
      <div className="container">
        <p className="my-3 mb-5">
          Home Page &gt; Complaint &gt; Complaints Details
        </p>
        <div className="row w-100 mb-5">
          <div className="col-lg-8 col-md-12 col-sm-12 col-12">
            <div className="complaints-details-header">
              <h1>Akbank Chip Did Not Deposit Money</h1>
              <p>6 views</p>
            </div>
            <div>
              <div className="complaints-owner-time">
                <img
                  src="https://files.sikayetvar.com/pp/default/o_150x150.svg"
                  alt=""
                />
                <h5>Onur</h5>
                <p>22 minutes ago</p>
              </div>
              <div className="complaints-details-description">
                <img
                  src="https://files.sikayetvar.com/complaint/2112/21129938/akbank-chip-para-yatirmadi-1_715x350.jpg"
                  alt=""
                  className="complaints-details-img"
                />
                <h4>
                  Akbank did not deposit 200 TL worth of chip money given to two
                  automatic payment orders . This campaign was sent to me as a
                  message on April 19, then I made two automatic payment orders,
                  and although 20 days passed, I was not credited with Chip
                  Money, although I called customer service several times , they
                  dismissed me saying that we opened a registration , we will
                  return, and I was not returned in any way. It seems that
                  Akbank does not keep every promise it makes.
                </h4>
              </div>
            </div>
            <div>
              <div className="complaints-reply-time">
                <img
                  src="https://files.sikayetvar.com/lg/cmp/80/80.svg?1522650125"
                  alt=""
                />
                <h5>Akbank</h5>
                <p>21 minutes ago </p>
              </div>
              <div className="container complaints-reply-description">
                <p>
                  Dear Customer, Your notification has been taken into
                  consideration and detailed information about the result will
                  be sent to you from your contact information registered in our
                  bank. In case of a change in your contact information
                  registered in our bank, you can update your information via
                  our 444 25 25 Telephone Branch, Branches or Akbank Direkt
                  Internet. You can use the "Contact Us" form on our website
                  www.akbank.com for all your complaints, suggestions and
                  requests about our bank's products and services. Best Regards
                  Akbank
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
            {/* Status Complaints */}
            <StatusComplaints />
            {/*^^^^^^^^^new Comparison ^^^^^^^^^^^^  */}
            <NewComparison />
          </div>
        </div>
        {/* login or register section */}
        <div className="my-5 complaints-login-register-container">
          <div className="complaints-login-register">
            <img src={user} alt="" />
            <p>
              <span>Login</span> or <span>Register</span> to post a comment .
            </p>
          </div>
          <div className="complaints-login-comment">
            <p>
              <i class="fa-solid fa-file-circle-plus"></i> Add
              Invoice/Photo/Video/Document
            </p>
            <button>
              <i class="fa-solid fa-comment"></i> Comment
            </button>
          </div>
        </div>
        {/* ^^^^^^^^^^^^^^^^^^^^ Similer Complaints ^^^^^^^^^^^^^^^^^ */}
        <div>
          <h1>Similar Complaints</h1>
        </div>
        <SingleCompleints />
      </div>
      <Footer />
    </>
  );
};

export default ComplaintDetails;
