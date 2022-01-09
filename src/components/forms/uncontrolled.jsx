import { Component } from "react";

class UncontrolledForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const data = {};
    data.name = event.target.name.value;
    data.email = event.target.email.value;
    data.password = event.target.password.value;
    console.log(data);
    event.target.reset();
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
            placeholder="Enter Your Name"
          />
          <input
            className="form-control my-4"
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
          />
          <input
            className="form-control my-4"
            type="password"
            name="password"
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

export default UncontrolledForm;
