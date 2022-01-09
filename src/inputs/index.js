import { Component } from "react";

class Inputs extends Component {
  state = {
    name: "",
    country: "",
    bio: "",
    brithDay: "",
    gender: "",
    agree: false,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCheackBox = (event) => {
    this.setState({ agree: event.target.checked });
  };
  render() {
    const { name, country, bio, brithDay, agree } = this.state;
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
        <button
          onClick={() => console.log(this.state)}
          className="btn btn-success"
        >
          Show Data
        </button>
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
      </div>
    );
  }
}

export default Inputs;
