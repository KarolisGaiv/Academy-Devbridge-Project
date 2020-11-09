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

      {type === "textarea" ? (
        <textarea
          className="input-wrap__field"
          placeholder={placeholder}
          value={value}
          //defaultValue={value}
          onChange={handleChange}
        />
      ) : (
        <input
          type={type}
          value={value}
          className="input-wrap__field"
          placeholder={placeholder}
          onChange={handleChange}
        />
      )}
      {error && <span className="text-danger">{error.message}</span>}
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
