import React, { useState } from "react";
import { Button } from "components/Button/Button";
import SVGIcon from "components/SVGIcon/SVGIcon";
import classNames from "classnames";
import "./tag-button.scss";
import PropTypes from "prop-types";

const TagButton = ({ buttonText, icon }) => {
  const [selected, setSelected] = useState(false);
  const buttonStyle = classNames("tag-button", {
    "tag-button--selected": selected === true,
  });

  return (
    <Button className={buttonStyle} handleClick={() => setSelected(!selected)}>
      <SVGIcon name={icon} className="tag-button__icon" />
      {buttonText}
    </Button>
  );
};

export default TagButton;

TagButton.propTypes = {
  buttonText: PropTypes.string,
  icon: PropTypes.string,
};
