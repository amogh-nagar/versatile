import React, { useState } from "react";
import { FaVideo, FaRegFileImage, FaRegGrinAlt } from "react-icons/fa";
const Create = (props) => {
  const [text, settext] = useState("");
  
  const addpost = () => {
    if(text.length==0){
      return;
    }
    props.addpost({
      id: Math.random() * 100,
      userImg: "/images/demo.jpg",
      name: "James",
      time: "2h",
      likes: 0,
      text: text,
      postImg: "/images/space.jpg",
      comments: [],
    });
    settext("")
  };
  return (
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
            placeholder="Add a post "
          />
        </div>
        <div className="create__first-button">
          <button onClick={addpost}>Submit</button>
        </div>
      </div>
      <div className="create__second">
        <span className="create__second-icon">
          <FaVideo className="redColor" />{" "}
          <span className="text">Live Video</span>
        </span>
        <span className="create__second-icon">
          <FaRegFileImage className="greenColor" />{" "}
          <span className="text">Photo / Video</span>
        </span>
        <span className="create__second-icon">
          <FaRegGrinAlt className="orangeColor" />{" "}
          <span className="text">Feeling</span>
        </span>
      </div>
    </div>
  );
};

export default Create;
