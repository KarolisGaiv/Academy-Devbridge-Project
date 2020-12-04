import React from "react";
import PropTypes from "prop-types";
import SVGIcon from "../../SVGIcon/SVGIcon";
import "./rest-web-address.scss";

export const WebAddress = ({ icon, text }) => {
  return (
    <div className="restaurant-contact">
      <div className="restaurant-contact__icon">
        <SVGIcon name={icon} />
      </div>
      <p className="restaurant-contact__text">{text}</p>
    </div>
  );
};

WebAddress.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
};
