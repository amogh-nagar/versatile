import React from "react";

const ChatBar = (props) => {
  const [state, setState] = React.useState([
    { id: 1, image: "/images/demo.jpg", name: "James" },
    { id: 2, image: "/images/demo.jpg", name: "James" },
    { id: 3, image: "/images/demo.jpg", name: "James" },
    { id: 4, image: "/images/demo.jpg", name: "James" },
    { id: 5, image: "/images/demo.jpg", name: "James" },
    { id: 6, image: "/images/demo.jpg", name: "James" },
    { id: 7, image: "/images/demo.jpg", name: "James" },
    { id: 8, image: "/images/demo.jpg", name: "James" },
    { id: 9, image: "/images/demo.jpg", name: "James" },
    { id: 10, image: "/images/demo.jpg", name: "James" },
  ]);
  
  return (
    <div className="chatBar">
      {state.map((user) => (
        <div
          className="chatBar__list"
          key={user.id}
        
        >
          <div className="chatBar__list-img">
            <img src={user.image} alt="user" />
            <span className="status"></span>
          </div>
          <div className="chatBar__list-name">{user.name}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatBar;
