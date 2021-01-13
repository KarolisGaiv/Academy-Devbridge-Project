import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./heart-button.scss";

export const HeartButton = ({ isChecked = false }) => {
  const [checked, setChecked] = useState(isChecked);
  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);
  return (
    <input
      className="heart"
      type="checkbox"
      checked={checked}
      onChange={() => {}}
      onClick={() => setChecked(!checked)}
    />
  );
};

HeartButton.propTypes = {
  isChecked: PropTypes.bool,
};
