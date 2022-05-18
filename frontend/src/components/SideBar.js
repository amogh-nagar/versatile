import React, { useState } from "react";

const SideBar = () => {
  const [state, setState] = useState([
    { id: 1, image: "/images/demo.jpg", name: "Flutter" },
    { id: 2, image: "/images/demo.jpg", name: "PHP" },
    { id: 3, image: "/images/demo.jpg", name: "React Native" },
    { id: 4, image: "/images/demo.jpg", name: "Node JS" },
    { id: 5, image: "/images/demo.jpg", name: "Vue JS" },
    { id: 6, image: "/images/demo.jpg", name: "React" },
  ]);
  return (
    <div className="sidebar">
      {state.map((info) => (
        <div className="sidebar__list" key={info.id}>
          <div className="sidebar__list-img">
            <img src={info.image} alt="group image" />
          </div>
          <div className="sidebar__list-name">{info.name}</div>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
