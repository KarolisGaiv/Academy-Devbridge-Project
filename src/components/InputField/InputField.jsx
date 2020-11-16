import React, { useState } from "react";
import PropTypes from "prop-types";

import { validateInput } from "components/InputField/inputValidators";
import { ReactComponent as CrossIcon } from "assets/redCrossIcon.svg";
import "./input-field.scss";

const InputField = ({
  value,
  label,
  placeholder,
  validators,
  type,
  required,
  onChange,
}) => {
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    const { value } = event.target;
    setError(validateInput(validators, value));
    onChange(value);
  };

  return (
    <div className="input-wrap">
      {label && (
        <label htmlFor="input-field" className="input-label">
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        className={
          error
            ? "input-wrap__field input-wrap__field--error"
            : "input-wrap__field"
        }
        placeholder={placeholder}
        required={required}
        onChange={handleChange}
      />
      {error && (
        <div className="input-error-cross">
          <span className="text-danger"> {error.message} </span>
          <CrossIcon />
        </div>
      )}
    </div>
  );
};

InputField.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  validators: PropTypes.array,
  type: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

InputField.defaultProps = {
  value: "",
  label: "",
  placeholder: "",
  type: "text",
  validators: [],
  required: false,
};

export default InputField;
