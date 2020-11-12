import React from "react";
import "./navbar.scss";
import MainNavigation from "./MainNavigation/MainNavigation";

const Navbar = () => {
  return (
    <aside className="navbar">
      <MainNavigation />
    </aside>
  );
};

export default Navbar;
