import PropTypes from "prop-types";
import TextInput from "./text-input";
const Form = (props) => (
  <form onSubmit={props.handleSubmit}>
    <TextInput
      name="name"
      placeholder="Enter Your Name"
      value={props.values.name}
      onChange={props.handleChange}
    />
    <TextInput
      name="email"
      type="email"
      placeholder="Enter Your Email"
      value={props.values.email}
      onChange={props.handleChange}
    />
    <TextInput
      name="password"
      type="password"
      placeholder="Enter Your Password"
      value={props.values.password}
      onChange={props.handleChange}
    />

    <button className="btn btn-success my-4" type="submit">
      Submit
    </button>
  </form>
);

Form.propTypes = {
  values: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
