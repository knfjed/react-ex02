import React from "react";
import "./Card.css";
// import Reaction from "../Reaction/Reaction.jsx";

export default function Card({ img, name, following, comments }) {
  return (
    <div className="card">
      <img src={img} alt={`image of ${name}`} />
      <h1>{name}</h1>

      <div className="reaction">
        <div className="following">
          <p className="number">{following}</p>
          <p>FOLLOWING</p>
        </div>

        <div className="comments">
          <p class="number">{comments}</p>
          <p>COMMENTS</p>
        </div>
      </div>
    </div>
  );
}
