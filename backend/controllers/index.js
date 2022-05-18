exports.getpost = (req, res, next) => {
  res.status(200).json(
    JSON.stringify({
      user: {
        username: "joe-adam",
        name: "Joe Adam",
        profile_picture: "",
      },
      posts: [
        {
          id: 1,
          userImg: "/images/demo.jpg",
          name: "James",
          time: "2h",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nisi,\
            magnam quo illum expedita",
          postImg: "/images/space.jpg",
          likes: 0,
          comments: [],
        },
        {
          id: 2,
          userImg: "/images/demo.jpg",
          name: "James",
          time: "4h",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nisi,\
            magnam quo illum expedita",
          postImg: "/images/space.jpg",
          likes: 0,
          comments: [],
        },
        {
          id: 3,
          userImg: "/images/demo.jpg",
          name: "Rahul",
          time: "2h",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nisi,\
            magnam quo illum expedita",
          postImg: "/images/space.jpg",
          likes: 0,
          comments: [],
        },
        {
          id: 4,
          userImg: "/images/demo.jpg",
          name: "David",
          time: "2h",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nisi,\
            magnam quo illum expedita",
          postImg: "/images/space.jpg",
          likes: 0,
          comments: [],
        },
      ],
    })
  );
};
