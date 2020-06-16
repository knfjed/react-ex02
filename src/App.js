import React from "react";
import CardList from "./components/CardList/CardList.jsx";
import "./App.css";

const profiles = [
  {
    img:
      "https://i.pinimg.com/564x/49/c4/ab/49c4abde1d9821fefe9d1fe44bc048a6.jpg",
    name: "Lucy Rodriquez",
    following: 500,
    comments: 750,
  },
  {
    img:
      "https://d3kszy5ca3yqvh.cloudfront.net/wp-content/uploads/2016/10/lgf01a201405160900.jpg",
    name: "Gabriel Wise",
    following: 250,
    comments: 150,
  },
  {
    img: "https://y4create.net/wp/wp-content/uploads/2016/08/bg.jpg",
    name: "Bennie Thomas",
    following: 450,
    comments: 650,
  },
  {
    img: "https://farm2.static.flickr.com/1077/591430184_4f47e3aa45_o.jpg",
    name: "Martin Ingram",
    following: 900,
    comments: 750,
  },
  {
    img: "https://farm3.static.flickr.com/2580/3770706648_758dafafac_o.jpg",
    name: "Cedric Becker",
    following: 800,
    comments: 650,
  },
];

function App() {
  return <CardList profiles={profiles} />;
}

export default App;
