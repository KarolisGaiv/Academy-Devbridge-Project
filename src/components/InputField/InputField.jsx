import React, { useState } from "react";
import PropTypes from "prop-types";

import { validateInput } from "components/InputField/inputValidators";
import { ReactComponent as CheckIcon } from "assets/redCrossIcon.svg";
import "./input-field.scss";

const InputField = ({
  value,
  label,
  placeholder,
  validators,
  type,
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
      {label && <label htmlFor="input-field">{label}</label>}
      <input
        type={type}
        value={value}
        className={
          error
            ? "input-wrap__field input-wrap__field--error"
            : "input-wrap__field"
        }
        placeholder={placeholder}
        onChange={handleChange}
      />
      {error && (
        <span className="text-danger">
          {error.message}
          <CheckIcon />
        </span>
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
  onChange: PropTypes.func.isRequired,
};

InputField.defaultProps = {
  value: "",
  label: "",
  placeholder: "",
  type: "text",
  validators: [],
};

export default InputField;
