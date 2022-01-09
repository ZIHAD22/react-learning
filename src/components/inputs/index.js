import { Component } from "react";

class Inputs extends Component {
  state = {
    name: "",
    country: "",
    bio: "",
    brithDay: "",
    gender: "",
    agree: false,
    skills: [],
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCheackBox = (event) => {
    this.setState({ agree: event.target.checked });
  };
  handleSkillChange = (event) => {
    if (event.target.checked) {
      this.setState({
        skills: [...this.state.skills, event.target.value],
      });
    } else {
      const skills = this.state.skills.filter(
        (skill) => skill !== event.target.value
      );
      this.setState({ skills });
    }
  };

  render() {
    const { name, country, bio, brithDay, agree, skills } = this.state;
    return (
      <div className="my-2 mx-4">
        <h1 style={{ textAlign: "center" }}>WORK WITH RAECT FROMS</h1>
        <input
          className="form-control my-2"
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
          placeholder="MD ZIHAD"
        />
        <select
          className="form-control my-2"
          value={country}
          onChange={this.handleChange}
          name="country"
        >
          <option value="Bangladesh">Bangladesh</option>
          <option value="India">India</option>
          <option value="japan">japan</option>
          <option value="Us">Us</option>
        </select>
        <textarea
          className="form-control my-2"
          name="bio"
          cols="30"
          rows="10"
          value={bio}
          onChange={this.handleChange}
          placeholder="tell me about your self"
        ></textarea>
        <input
          onChange={this.handleChange}
          value={brithDay}
          className="form-control my-2"
          type="date"
          name="brithDay"
        />

        <div className="col-md-6 my-4">
          <label htmlFor="male">
            <input
              id="male"
              className="mx-4"
              type="radio"
              name="gender"
              value="male"
              onChange={this.handleChange}
            />
            Male
          </label>
          <label htmlFor="female">
            <input
              id="female"
              className="mx-4"
              type="radio"
              name="gender"
              value="Female"
              onChange={this.handleChange}
            />
            Female
          </label>
          <label htmlFor="other">
            <input
              className="mx-4"
              id="other"
              type="radio"
              name="gender"
              value="Other"
              onChange={this.handleChange}
            />
            Other
          </label>
        </div>
        <div className="col-md-6">
          <label htmlFor="Javascript">
            <input
              className="mx-4"
              type="checkbox"
              value="Javascript"
              id="Javascript"
              name="skills"
              onChange={this.handleSkillChange}
              checked={skills.includes("Javascript")}
            />
            Javascript
          </label>
          <label htmlFor="java">
            <input
              className="mx-4"
              type="checkbox"
              id="java"
              value="java"
              name="skills"
              onChange={this.handleSkillChange}
              checked={skills.includes("java")}
            />
            java
          </label>
          <label htmlFor="Golang">
            <input
              className="mx-4"
              type="checkbox"
              id="Golang"
              value="Golang"
              name="skills"
              onChange={this.handleSkillChange}
              checked={skills.includes("Golang")}
            />
            Golang
          </label>
          <label htmlFor="Python">
            <input
              className="mx-4"
              type="checkbox"
              id="Python"
              value="Python"
              name="skills"
              onChange={this.handleSkillChange}
              checked={skills.includes("Python")}
            />
            Python
          </label>
        </div>
        <div className="col-md-6 my-4">
          <label htmlFor="forChacked">
            <input
              type="checkbox"
              id="forChacked"
              checked={agree}
              onChange={this.handleCheackBox}
            />
            I Agree to all terms and condition
          </label>
        </div>
        <button
          onClick={() => console.log(this.state)}
          className="btn btn-success"
        >
          Show Data
        </button>
      </div>
    );
  }
}

export default Inputs;
