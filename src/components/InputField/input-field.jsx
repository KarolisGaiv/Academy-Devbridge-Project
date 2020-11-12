import React, { useState } from "react";
import PropTypes from "prop-types";

import { validateInput } from "components/InputField/validator.js";
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
        className={error ? "input-wrap__field--error" : "input-wrap__field"}
        placeholder={placeholder}
        onChange={handleChange}
      />
      {error && (
        <span className="text-danger">
          {error.message}
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 1L1 9"
              stroke="#FF6E75"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 1L9 9"
              stroke="#FF6E75"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
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
