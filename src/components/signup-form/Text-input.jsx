import PropTypes from "prop-types";

const TextInput = (props) => (
  <div className="form-group">
    <label htmlFor={props.name}>{props.label}</label>
    <input
      className={props.className}
      type={props.type}
      name={props.name}
      id={props.name}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
    />
  </div>
);

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

TextInput.defaultProps = {
  label: "",
  type: "text",
  placeholder: "",
  className: "form-control",
};

export default TextInput;
