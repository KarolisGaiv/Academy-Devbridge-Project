import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import propTypes from "prop-types";
import SVGIcon from "./SVGIcon";
import NavItem from "./NavItem/NavItem";

import "./mainNavigation.scss";

const MainNavigation = (props) => {
  const [navigationState, expandNavigationState] = useState({
    navItems: [
      {
        id: "1",
        iconName: "home",
        itemStatus: "inactive",
        pageURL: "",
        itemText: "",
      },
      {
        id: "2",
        iconName: "bookmark",
        itemStatus: "inactive",
        pageURL: "reservations",
        itemText: "",
      },
      {
        id: "3",
        iconName: "compass",
        itemStatus: "inactive",
        pageURL: "eat-out",
        itemText: "",
      },
    ],
  });

  const [expanded, setExpanded] = useState(false);

  const expandEventHandler = () => {
    if (expanded) {
      setExpanded(false);
      expandNavigationState({
        navItems: [
          {
            ...navigationState.navItems[0],
            itemText: "",
          },
          {
            ...navigationState.navItems[1],
            itemText: "",
          },
          {
            ...navigationState.navItems[2],
            itemText: "",
          },
        ],
      });
    } else {
      setExpanded(true);
      expandNavigationState({
        navItems: [
          {
            ...navigationState.navItems[0],
            itemText: "Dashboard",
          },
          {
            ...navigationState.navItems[1],
            itemText: "Reservations",
          },
          {
            ...navigationState.navItems[2],
            itemText: "Eat-Out",
          },
        ],
      });
    }
  };

  return (
    <div
      className={`navigation__wrapper
      ${expanded ? "navigation__wrapper--long" : "navigation__wrapper--short"}`}
    >
      <nav className="navigation">
        <NavLink to="/" exact>
          <SVGIcon
            name={expanded ? `fullLogo` : `logo`}
            className="navigation__logo"
          />
        </NavLink>
        <div>
          <button
            className="navigation__chevron--background"
            onClick={expandEventHandler}
          >
            <SVGIcon
              name="chevron-right"
              className={`navigation__chevron 
              ${
                expanded
                  ? "navigation__chevron--left"
                  : "navigation__chevron--right"
              }`}
            />
          </button>
        </div>
        <ul>
          {navigationState.navItems.map((item) => (
            <NavLink
              key={item.id}
              to={`/${item.pageURL}`}
              exact
              activeClassName="selected"
            >
              <NavItem
                expanded={expanded}
                iconName={item.iconName}
                itemStatus={item.itemStatus}
                itemText={item.itemText}
              />
            </NavLink>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MainNavigation;

MainNavigation.propTypes = {
  toggleMenuHander: propTypes.func,
};
