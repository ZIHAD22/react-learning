import React from "react";
const Links = (props) => (
  <div className="Links">
    <h3>Social Links:</h3>
    <ul>
      <li>
        <a href="#">{props.sLinks[0]}</a>
      </li>
      <li>
        <a href="#">{props.sLinks[1]}</a>
      </li>
      <li>
        <a href="#">{props.sLinks[2]}</a>
      </li>
      <li>
        <a href="#">{props.sLinks[3]}</a>
      </li>
    </ul>
  </div>
);
export default Links;
