import React from "react";
import Card from "../Card/Card.jsx";

export default function CardList({ profiles }) {
  return (
    <div className="cardList">
      {profiles.map(({ img, name, following, comments }) => (
        <Card img={img} name={name} following={following} comments={comments} />
      ))}
    </div>
  );
}
