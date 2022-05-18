import React from "react";

const Stories = () => {
  const [state, setState] = React.useState([
    { id: 1, image: "/images/demo.jpg", name: "Flutter" },
    { id: 2, image: "/images/demo.jpg", name: "PHP" },
    { id: 3, image: "/images/demo.jpg", name: "React Native" },
    { id: 4, image: "/images/demo.jpg", name: "Node JS" },
  ]);
  return (
    <div className="stories">
      {state.map((story) => (
        <div className="stories__col" key={story.id}>
          <div className="stories__body">
            <img src={story.image} alt="stories" />
            <div className="stories__body-overlay">
              <div className="stories__body-overlay-img">
                <img src={story.image} alt="" />
              </div>
              <div className="stories__body-name">{story.name}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stories;
