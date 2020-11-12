import React from "react";
import propTypes from "prop-types";
import SVGIcon from "./SVGIcon";

import "./MainNavigation.scss";

const NavItem = (props) => {
  return (
    <li className="navigation__item">
      <SVGIcon
        name={props.background}
        currentPath={props.currentPath}
        expandFrom={props.expandFrom}
        expandTo={props.expandTo}
        subtractTo={props.subtractTo}
        subtractFrom={props.subtractFrom}
        id={props.id}
        className={`navigation__item-background navigation__item-background--${props.itemStatus} navigation__item-background--${props.expanded}`}
      />
      <div className="navigation__context">
        <SVGIcon
          name={props.iconName}
          className={`navigation__icon navigation__icon--${props.itemStatus}`}
        />
        <span
          className={`navigation__text navigation__text--${props.itemStatus}`}
        >
          {props.itemText}
        </span>
      </div>
    </li>
  );
};

export default NavItem;

NavItem.propTypes = {
  id: propTypes.string,
  background: propTypes.string,
  iconName: propTypes.string,
  itemStatus: propTypes.string,
  pageURL: propTypes.string,
  itemText: propTypes.string,
  onClick: propTypes.func,
  expanded: propTypes.string,
  viewBox: propTypes.string,
  width: propTypes.string,
  currentPath: propTypes.string,
  expandFrom: propTypes.string,
  expandTo: propTypes.string,
  subtractTo: propTypes.string,
  subtractFrom: propTypes.string,
};
