import React, { Component } from "react";
import "./profile.style.css";
class Profile extends Component {
  render() {
    return (
      <div className="container">
        <div className="bio">
          <h3>MD Kowser Ahammed Zihad</h3>
          <p>Fullstack javaScript and PHP Developer </p>
        </div>
        <div className="Skills">
          <h3>Skills:</h3>
          <ul>
            <li>PHP</li>
            <li>javaScript</li>
            <li>node</li>
          </ul>
        </div>
        <div className="Links">
          <h3>Social Links:</h3>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twittw</a>
            </li>
            <li>
              <a href="#">Linkid</a>
            </li>
            <li>
              <a href="#">Github</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Profile;
