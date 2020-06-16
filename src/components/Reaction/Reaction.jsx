import React from "react";

export default function Reaction({}) {
  return (
    <>
      <div className="reaction">
        <p>{following}</p>
        <p>FOLLOWING</p>
      </div>

      <div className="reaction">
        <p>{comments}</p>
        <p>COMMENTS</p>
      </div>
    </>
  );
}
