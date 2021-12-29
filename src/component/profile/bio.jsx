import React from "react";
const Bio = (props) => (
  <div className="bio">
    <h3>{props.name}</h3>
    <p>{props.bio}</p>
  </div>
);

export default Bio;
