import React from "react";
import "./Header.scss";
import { ReactComponent as NotificationBell } from "./icons/notification.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__profileWidget">
        <div className="header__profileWidget--placeholder"></div>
      </div>
      <div className="header__notification">
        <NotificationBell />
      </div>
    </header>
  );
}

export default Header;
