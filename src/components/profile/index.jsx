import React, { Component } from "react";
import "./profile.style.css";
import Bio from "./bio";
import Links from "./links";
import Skills from "./skills";
class Profile extends Component {
  person1 = {
    name: "MD Kowser Ahammed Zihad",
    bio: "Fullstack javaScript and PHP Developer(MERN Developer)",
    skillsOf: ["PHP", "JavaScript", "Node", "React", "MongoDB"],
    linksOf: ["Facebook", "Twittw", "Linkid", "Linkid"],
  };

  render() {
    return (
      <div className="container">
        <Bio name={this.person1.name} bio={this.person1.bio} />
        <Skills skills={this.person1.skillsOf} />
        <Links sLinks={this.person1.linksOf} />
      </div>
    );
  }
}

export default Profile;
