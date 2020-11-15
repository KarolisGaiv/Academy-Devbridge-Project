import React from "react";
import propTypes from "prop-types";
import SVGIcon from "../SVGIcon";

import "../mainNavigation.scss";

const NavItem = (props) => {
  return (
    <li className="navigation__item">
      {props.background}
      <div className="navigation__context">
        <SVGIcon name={props.iconName} className={`navigation__icon`} />
        <span className={`navigation__text`}>{props.itemText}</span>
      </div>
    </li>
  );
};

export default NavItem;

NavItem.propTypes = {
  background: propTypes.string,
  iconName: propTypes.string,
  itemText: propTypes.string,
};
