import React from "react";
import { NavLink } from "react-router-dom";
import useLocalStorageState from "use-local-storage-state";
import propTypes from "prop-types";
import SVGIcon from "./SVGIcon";
import NavItem from "./NavItem";

import "./MainNavigation.scss";

const MainNavigation = (props) => {
  const [navigationState, expandNavigationState] = useLocalStorageState("set", {
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
    path: [
      {
        currentPath:
          "M0 44.1062C0 28.8817 12.3419 16.5398 27.5664 16.5398H59.4602C68.5949 16.5398 76 9.13469 76 0V89C76 79.4303 68.2422 71.6726 58.6726 71.6726H27.5664C12.3419 71.6726 0 59.3307 0 44.1062Z",
        expandFrom:
          "M0 44.1062C0 28.8817 12.3419 16.5398 27.5664 16.5398H59.4602C68.5949 16.5398 76 9.13469 76 0V89C76 79.4303 68.2422 71.6726 58.6726 71.6726H27.5664C12.3419 71.6726 0 59.3307 0 44.1062Z",
        expandTo:
          "M0 44.1062C0 28.8817 12.3419 16.5398 27.5664 16.5398H169.46C178.595 16.5398 186 9.13469 186 0V89C186 79.4303 178.242 71.6726 168.673 71.6726H27.5664C12.3419 71.6726 0 59.3307 0 44.1062Z",
        subtractFrom:
          "M0 44.1062C0 28.8817 12.3419 16.5398 27.5664 16.5398H169.46C178.595 16.5398 186 9.13469 186 0V89C186 79.4303 178.242 71.6726 168.673 71.6726H27.5664C12.3419 71.6726 0 59.3307 0 44.1062Z",
        subtractTo:
          "M0 44.1062C0 28.8817 12.3419 16.5398 27.5664 16.5398H59.4602C68.5949 16.5398 76 9.13469 76 0V89C76 79.4303 68.2422 71.6726 58.6726 71.6726H27.5664C12.3419 71.6726 0 59.3307 0 44.1062Z",
      },
    ],
  });

  const [expanded, setExpanded] = useLocalStorageState(false);

  const expandEventHandler = () => {
    if (expanded) {
      setExpanded(false);
      document.getElementById("subtract-1").beginElement();
      document.getElementById("subtract-2").beginElement();
      document.getElementById("subtract-3").beginElement();
      expandNavigationState({
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
        path: [
          {
            currentPath:
              "M0 44.1062C0 28.8817 12.3419 16.5398 27.5664 16.5398H59.4602C68.5949 16.5398 76 9.13469 76 0V89C76 79.4303 68.2422 71.6726 58.6726 71.6726H27.5664C12.3419 71.6726 0 59.3307 0 44.1062Z",
            expandFrom:
              "M0 44.1062C0 28.8817 12.3419 16.5398 27.5664 16.5398H59.4602C68.5949 16.5398 76 9.13469 76 0V89C76 79.4303 68.2422 71.6726 58.6726 71.6726H27.5664C12.3419 71.6726 0 59.3307 0 44.1062Z",
            expandTo:
              "M0 44.1062C0 28.8817 12.3419 16.5398 27.5664 16.5398H169.46C178.595 16.5398 186 9.13469 186 0V89C186 79.4303 178.242 71.6726 168.673 71.6726H27.5664C12.3419 71.6726 0 59.3307 0 44.1062Z",
            subtractFrom:
              "M0 44.1062C0 28.8817 12.3419 16.5398 27.5664 16.5398H169.46C178.595 16.5398 186 9.13469 186 0V89C186 79.4303 178.242 71.6726 168.673 71.6726H27.5664C12.3419 71.6726 0 59.3307 0 44.1062Z",
            subtractTo:
              "M0 44.1062C0 28.8817 12.3419 16.5398 27.5664 16.5398H59.4602C68.5949 16.5398 76 9.13469 76 0V89C76 79.4303 68.2422 71.6726 58.6726 71.6726H27.5664C12.3419 71.6726 0 59.3307 0 44.1062Z",
          },
        ],
      });
    } else {
      setExpanded(true);
      document.getElementById("expand-1").beginElement();
      document.getElementById("expand-2").beginElement();
      document.getElementById("expand-3").beginElement();
      expandNavigationState({
        navItems: [
          {
            id: "1",
            iconName: "home",
            itemStatus: "inactive",
            pageURL: "",
            itemText: "Dashboard",
          },
          {
            id: "2",
            iconName: "bookmark",
            itemStatus: "inactive",
            pageURL: "reservations",
            itemText: "Reservations",
          },
          {
            id: "3",
            iconName: "compass",
            itemStatus: "inactive",
            pageURL: "eat-out",
            itemText: "Eat-Out",
          },
        ],
        path: [
          {
            currentPath:
              "M0 44.1062C0 28.8817 12.3419 16.5398 27.5664 16.5398H169.46C178.595 16.5398 186 9.13469 186 0V89C186 79.4303 178.242 71.6726 168.673 71.6726H27.5664C12.3419 71.6726 0 59.3307 0 44.1062Z",
            expandFrom:
              "M0 44.1062C0 28.8817 12.3419 16.5398 27.5664 16.5398H59.4602C68.5949 16.5398 76 9.13469 76 0V89C76 79.4303 68.2422 71.6726 58.6726 71.6726H27.5664C12.3419 71.6726 0 59.3307 0 44.1062Z",
            expandTo:
              "M0 44.1062C0 28.8817 12.3419 16.5398 27.5664 16.5398H169.46C178.595 16.5398 186 9.13469 186 0V89C186 79.4303 178.242 71.6726 168.673 71.6726H27.5664C12.3419 71.6726 0 59.3307 0 44.1062Z",
            subtractFrom:
              "M0 44.1062C0 28.8817 12.3419 16.5398 27.5664 16.5398H169.46C178.595 16.5398 186 9.13469 186 0V89C186 79.4303 178.242 71.6726 168.673 71.6726H27.5664C12.3419 71.6726 0 59.3307 0 44.1062Z",
            subtractTo:
              "M0 44.1062C0 28.8817 12.3419 16.5398 27.5664 16.5398H59.4602C68.5949 16.5398 76 9.13469 76 0V89C76 79.4303 68.2422 71.6726 58.6726 71.6726H27.5664C12.3419 71.6726 0 59.3307 0 44.1062Z",
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
          <NavLink to="/" exact activeClassName="selected">
            <NavItem
              id={navigationState.navItems[0].id}
              background="navItemBackground"
              iconName={navigationState.navItems[0].iconName}
              itemStatus={navigationState.navItems[0].itemStatus}
              pageURL={navigationState.navItems[0].pageURL}
              itemText={navigationState.navItems[0].itemText}
              currentPath={navigationState.path[0].currentPath}
              expandFrom={navigationState.path[0].expandFrom}
              expandTo={navigationState.path[0].expandTo}
              subtractFrom={navigationState.path[0].subtractFrom}
              subtractTo={navigationState.path[0].subtractTo}
            />
          </NavLink>
          <NavLink to="/reservations" exact activeClassName="selected">
            <NavItem
              id={navigationState.navItems[1].id}
              background="navItemBackground"
              iconName={navigationState.navItems[1].iconName}
              itemStatus={navigationState.navItems[1].itemStatus}
              pageURL={navigationState.navItems[1].pageURL}
              itemText={navigationState.navItems[1].itemText}
              currentPath={navigationState.path[0].currentPath}
              expandFrom={navigationState.path[0].expandFrom}
              expandTo={navigationState.path[0].expandTo}
              subtractFrom={navigationState.path[0].subtractFrom}
              subtractTo={navigationState.path[0].subtractTo}
            />
          </NavLink>
          <NavLink to="/eat-out" exact activeClassName="selected">
            <NavItem
              id={navigationState.navItems[2].id}
              background="navItemBackground"
              iconName={navigationState.navItems[2].iconName}
              itemStatus={navigationState.navItems[2].itemStatus}
              pageURL={navigationState.navItems[2].pageURL}
              itemText={navigationState.navItems[2].itemText}
              currentPath={navigationState.path[0].currentPath}
              expandFrom={navigationState.path[0].expandFrom}
              expandTo={navigationState.path[0].expandTo}
              subtractFrom={navigationState.path[0].subtractFrom}
              subtractTo={navigationState.path[0].subtractTo}
            />
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default MainNavigation;

MainNavigation.propTypes = {
  toggleMenuHander: propTypes.func,
};
