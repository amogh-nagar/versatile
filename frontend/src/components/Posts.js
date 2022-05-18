import React from "react";
import Stories from "./Stories";
import Create from "./Create";
import ShowPost from "./ShowPost";

const Posts = (props) => {
  console.log(props.items);
  return (
    <div className="posts">
      <Stories />
      <Create addpost={props.addpost}/>
      <ShowPost items={props.items} likehandler={props.likehandler} addcomment={props.addcomment}/>
    </div>
  );
};

export default Posts;
