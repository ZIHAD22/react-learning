import React from "react";
const Skills = (props) => (
  <div className="Skills">
    <h3>Skills:</h3>
    <ul>
      <li>{props.skills[0]}</li>
      <li>{props.skills[1]}</li>
      <li>{props.skills[2]}</li>
      <li>{props.skills[3]}</li>
      <li>{props.skills[4]}</li>
    </ul>
  </div>
);
export default Skills;
