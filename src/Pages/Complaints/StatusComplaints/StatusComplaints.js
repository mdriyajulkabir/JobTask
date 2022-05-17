import React from "react";
import { Steps } from "rsuite";
import "./StatuComplaints.css";
const StatusComplaints = () => {
  return (
    <div className="status-container">
      <div className="status-complaint">
        <h4>Status of the Complaint</h4>
        <div className="mt-3 pt-3">
        <Steps current={1} style={{width:"100%", height:"100%"}}>
          <Steps.Item
            description="On The Air"
            icon={<i class="fa-solid fa-circle-check fs-4 "></i>}
            className=""
          />
          <Steps.Item description="Answered" icon={<i class="fa-solid fa-circle-dot fs-4  "></i>} />
          <Steps.Item description="Solved" icon={<i class="fa-solid fa-circle"></i>} />
        </Steps>
        </div>
      </div>
      <div className="text-center">
        <div className="status-like-comment">
          <p>
            <i class="fa-solid fa-thumbs-up"></i> Support
          </p>
          <p>
            <i class="fa-solid fa-comment"></i> Comment
          </p>
          <p>
            <i class="fa-solid fa-share-nodes"></i>
          </p>
          <p>
            <i class="fa-solid fa-bookmark"></i>
          </p>
        </div>

        <button type="submit" className="status-button">
          Write A Simillar Complaint
        </button>
      </div>
    </div>
  );
};

export default StatusComplaints;
