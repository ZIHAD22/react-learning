import React, { Component } from "react";
import "./profile.style.css";
import Bio from "./bio";
import Links from "./links";
import Skills from "./skills";
class Profile extends Component {
  render() {
    return (
      <div className="container">
        <Bio />
        <Skills />
        <Links />
      </div>
    );
  }
}

export default Profile;
