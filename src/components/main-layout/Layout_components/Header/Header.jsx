import React from "react";
import "../../Layout.css";
import { ReactComponent as NotificationBell } from "./icons/notification.svg";

function Header() {
  return (
    <header className="header__body">
      <div className="header__profileWidget"></div>
      <div className="header__notification">
        <NotificationBell />
      </div>
    </header>
  );
}

export default Header;
