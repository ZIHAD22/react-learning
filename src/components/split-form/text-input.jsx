import PropTypes from "prop-types";

const TextInput = (props) => (
  <div className="form-group">
    <label htmlFor={props.name}> {props.lable} </label>
    <input
      className={props.className}
      type={props.type}
      name={props.name}
      id={props.name}
      onChange={props.onChange}
      value={props.value}
      placeholder={props.placeholder}
    />
  </div>
);

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  lable: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

TextInput.defaultProps = {
  type: "text",
  lable: "",
  className: "form-control",
  placeholder: "",
};

export default TextInput;
