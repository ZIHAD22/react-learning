import PropTypes from "prop-types";
import TextInput from "./Text-input";

const Form = ({
  values,
  handleChange,
  handleAgreement,
  agreement,
  handleSubmit,
}) => (
  <form onSubmit={handleSubmit}>
    <TextInput
      name="name"
      placeholder="Enter Your Name"
      value={values.name}
      onChange={handleChange}
    />
    <TextInput
      name="email"
      type="email"
      placeholder="Enter Your Email"
      value={values.email}
      onChange={handleChange}
    />
    <TextInput
      name="password"
      type="password"
      placeholder="Enter Your Password"
      value={values.password}
      onChange={handleChange}
    />
    <TextInput
      name="birthDate"
      type="date"
      value={values.birthDate}
      onChange={handleChange}
    />
    <div className="form-controll">
      <label htmlFor="male">
        <input
          className="form-controll mx-2 my-4"
          type="radio"
          name="gender"
          id="male"
          value="Male"
          onChange={handleChange}
        />
        Male
      </label>
      <label htmlFor="female">
        <input
          className="form-controll mx-2 my-4"
          type="radio"
          name="gender"
          id="female"
          value="Female"
          onChange={handleChange}
        />
        Female
      </label>
      <label htmlFor="other">
        <input
          className="form-controll mx-2 my-4"
          type="radio"
          name="gender"
          id="other"
          value="Other"
          onChange={handleChange}
        />
        Other
      </label>
    </div>
    <div className="form-controll mx-2 my-4">
      <label htmlFor="agreement">
        <input
          className="form-controll"
          type="checkbox"
          name="agreement"
          id="agreement"
          checked={agreement}
          onChange={handleAgreement}
        />
        I ageree to all trems and condition
      </label>
    </div>
    <button className="btn btn-primary" disabled={!agreement} type="submit">
      Create User
    </button>
  </form>
);

Form.propTypes = {
  values: PropTypes.object.isRequired,
  agreement: PropTypes.bool.isRequired,
  handleAgreement: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
