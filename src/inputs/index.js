import { Component } from "react";

class Inputs extends Component {
  state = {
    name: "",
    country: "",
    bio: "",
    brithDay: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { name, country, bio, brithDay } = this.state;
    return (
      <div className="my-2 mx-4">
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
      </div>
    );
  }
}

export default Inputs;
