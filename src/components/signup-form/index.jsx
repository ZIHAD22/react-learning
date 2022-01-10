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
    errors: {},
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
    const { isValid, errors } = this.validate();

    if (isValid) {
      console.log(this.state.values);
      event.target.reset();
      this.setState({ values: initValues, agreement: false, errors: {} });
    } else {
      // console.log(errors);
      this.setState({ errors });
    }
  };

  validate = () => {
    const errors = {};
    const {
      values: { name, email, password, birthDate, gender },
    } = this.state;

    if (!name) {
      errors.name = "Please Provide Your Name";
    }
    if (!email) {
      errors.email = "Please Provide Your Email";
    }
    if (!password) {
      errors.password = "Please Provide Your Password";
    }
    if (!birthDate) {
      errors.birthDate = "Please Provide Your Birth Date";
    }
    if (!gender) {
      errors.gender = "Please Select your Gender";
    }

    return {
      errors,
      isValid: Object.keys(errors).length === 0,
    };
  };

  render() {
    return (
      <div style={{ margin: "50px" }}>
        <h1 style={{ textAlign: "center" }}>Singup Form</h1>
        <Form
          values={this.state.values}
          agreement={this.state.agreement}
          errors={this.state.errors}
          handleChange={this.handleChange}
          handleAgreement={this.handleAgreement}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default SignupForm;
