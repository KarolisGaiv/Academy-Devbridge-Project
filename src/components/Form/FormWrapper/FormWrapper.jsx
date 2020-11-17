import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as FormLogo } from "../../../assets/formLogo.svg";
import "./form-wrapper.scss";

export function FormWrapper({ children }) {
  return (
    <div className="form-wrapper">
      <figure className="form-wrapper__logo">
        <FormLogo />
        {children}
      </figure>
    </div>
  );
}

FormWrapper.propTypes = {
  children: PropTypes.object,
};
