import React,  { useEffect, useState } from 'react';
import reply from "../../../images/AutoPlaySlider/reply.svg";
import "./SIngleCompleints.css"
const SingleCompleints = () => {
    const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/sikayetlerData.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
    return (
        <div>
            {posts.map((post) => (
              <div className="post-container">
                <div className="d-flex">
                  <img src={post.img} className="post-img" alt="" />
                  <div>
                    <div className="d-flex">
                      <h5 className="me-3 post-owner">{post.name}</h5>
                      <div className="d-flex align-items-start">
                        <img src={reply} className="pt-2 pe-2" alt="" />
                        <span className="post-from">{post.from}</span>
                      </div>
                    </div>
                    <p className="post-time">{post.time}</p>
                  </div>
                </div>
                <h2 className="post-title">{post.title}</h2>
                <h5 className="post-description">{post.description}</h5>
                <a href="#readmore" className="post-read-more">
                  Read more
                </a>
                <br /> <br />
                <hr />
                <div className="d-flex justify-content-between post-like-comment">
                  <h5>
                    <i class="fa-regular fa-thumbs-up"></i>
                    support
                  </h5>
                  <h5>
                    <i class="fa-regular fa-comment"></i>
                    Comment
                  </h5>
                  <h5>
                    <i class="fa-regular fa-bookmark"></i>
                    Save
                  </h5>
                </div>
              </div>
            ))}
          
        </div>
    );
};

export default SingleCompleints;