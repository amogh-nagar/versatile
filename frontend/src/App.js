import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Posts from "./components/Posts";
import ChatBar from "./components/ChatBar";
import axios from "axios";
function App() {
  const [items, setitems] = useState();
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get("https://versatilebackend.herokuapp.com/api/post");
      setitems(JSON.parse(res.data));
    };

    fetch();
  }, []);
  const likehandler = (id) => {
    let updateitems = items;
    const itemidx = updateitems.posts.findIndex((item) => item.id === id);
    updateitems.posts[itemidx].likes++;
    setitems((prev) => {
      return { ...prev, posts: updateitems.posts };
    });
  };
  const addpost = (post) => {
    setitems((prev) => {
      return {
        ...prev,
        posts: [post, ...prev.posts],
      };
    });
  };
  const addcomment = (id, text) => {
    let updateitems = items;
    const itemidx = updateitems.posts.findIndex((item) => item.id === id);
    updateitems.posts[itemidx].comments.push(text);
    setitems((prev) => {
      return { ...prev, posts: updateitems.posts };
    });
  };
  console.log(items);
  return (
    <div className="App">
      <Navbar />
      <div className="facebook">
        <SideBar />
        <Posts
          addpost={addpost}
          items={items}
          likehandler={likehandler}
          addcomment={addcomment}
        />
        <ChatBar />
      </div>
    </div>
  );
}

export default App;
