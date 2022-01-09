import { Component } from "react";

class ControlledForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.setState({ name: "", email: "", password: "" });
  };
  render() {
    return (
      <div style={{ margin: "50px" }}>
        <form onSubmit={this.handleSubmit}>
          <input
            className="form-control my-4"
            type="text"
            name="name"
            id="name"
            onChange={this.handleChange}
            value={this.state.name}
            placeholder="Enter Your Name"
          />
          <input
            className="form-control my-4"
            type="email"
            name="email"
            onChange={this.handleChange}
            id="email"
            value={this.state.email}
            placeholder="Enter Your Email"
          />
          <input
            className="form-control my-4"
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
            id="password"
            placeholder="Enter Your Password"
          />

          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ControlledForm;
