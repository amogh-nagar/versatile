import React, { useState } from "react";
import {
  FaVideo,
  FaRegFileImage,
  FaRegGrinAlt,
  FaRegThumbsUp,
  FaRegCommentAlt,
  FaShareAlt,
} from "react-icons/fa";

import Modal from "./Modal/Modal";
const ShowPost = (props) => {
  const [showmodal, setshowmodal] = useState(false);
  const [text, settext] = useState("");
  const [cmnts, setcmnts] = useState([]);
  const [id, setid] = useState("");
  const likehandler = (id) => {
    props.likehandler(id);
  };
  const commenthandler = (id) => {
    setshowmodal(true);
    setid(id);
    const itemidx = props.items.posts.findIndex((item) => item.id === id);
    setcmnts(props.items.posts[itemidx].comments);
  };
  const addcomment = () => {
    if(text.length==0){
      return;
    }
    props.addcomment(id, text);
    settext("");
    closemodal();
  };
const closemodal=()=>{
  
  setshowmodal(false);
}
  return (
    <div className="show">
      {showmodal && (
        <Modal>
          <div className="create">
            <div className="create__first">
              <div className="create__first-img">
                <span>
                  <img src="/images/demo.jpg" alt="user" />
                </span>
              </div>
              <div className="create__first-input">
                <input
                  onChange={(e) => settext(e.target.value)}
                  type="text"
                  className="create__first-inputs"
                  placeholder="Add a comment"
                />
              </div>
              <div className="create__first-button_modal">
                <button onClick={addcomment}>Submit</button>
                <button onClick={closemodal}>Close</button>
              </div>
            </div>
            {cmnts.map((cmnt,index) => (
              <div className="chatBar__list" key={index}>
                <div className="chatBar__list-img">
                  <img src="/images/demo.jpg" alt="user" />
                  <span className="status"></span>
                </div>
                <div className="chatBar__list-name">{cmnt}</div>
              </div>
            ))}
          </div>
        </Modal>
      )}
      {!props.items || !props.items.posts || props.items.posts.length == 0 ? (
        <p>Loading..</p>
      ) : (
        props.items.posts.map((post) => (
          <div key={post.id} className="empty">
            <div className="show__header">
              <div className="show__header-img">
                <img src={post.userImg} alt="user" />
              </div>
              <div className="show__header-name">
                {post.name} <div className="date">{post.time}</div>
              </div>
            </div>
            <div className="show__body">
              <div className="show__body-text">{post.text}</div>
              <div className="show__body-img">
                <img src={post.postImg} alt="post" />
              </div>
            </div>
            <div className="show__reactions">
              <span
                className="reactions"
                onClick={likehandler.bind(this, post.id)}
              >
                <FaRegThumbsUp />{" "}
                <span className="reactions-text">{+post.likes} Like(s)</span>
              </span>
              <span
                className="reactions"
                onClick={commenthandler.bind(this, post.id)}
              >
                <FaRegCommentAlt />{" "}
                <span className="reactions-text">{post.comments.length} Comments</span>
              </span>
              <span className="reactions">
                <FaShareAlt /> <span className="reactions-text">Share</span>
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ShowPost;
