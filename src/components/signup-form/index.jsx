import React, { Component } from "react";
import Form from "./form";
const initValues = {
  name: "",
  email: "",
  password: "",
  birthDate: "",
  gender: "",
};

class SignupForm extends Component {
  state = {
    values: initValues,
    agreement: false,
  };

  handleChange = (event) => {
    this.setState({
      values: {
        ...this.state.values,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleAgreement = (event) => {
    this.setState({
      agreement: event.target.checked,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    event.target.reset();
    this.setState({ values: initValues, agreement: false });
  };

  render() {
    return (
      <div style={{ margin: "50px" }}>
        <h1 style={{ textAlign: "center" }}>Singup Form</h1>
        <Form
          values={this.state.values}
          agreement={this.state.agreement}
          handleChange={this.handleChange}
          handleAgreement={this.handleAgreement}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default SignupForm;
