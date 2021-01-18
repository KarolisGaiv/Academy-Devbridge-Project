import React from "react";
import "./layout.scss";
import Header from "./layoutComponents/Header/Header";
import Navbar from "./layoutComponents/Navbar/Navbar";
import Content from "./layoutComponents/Content/Content";
import Footer from "./layoutComponents/Footer/Footer";
import Progress from "../../pages/progressPage/Progress";
import { Login } from "pages/Login";

const Layout = () => {
  let currentPath = window.location.pathname;

  if (currentPath === "/" || currentPath === "/register") {
    return <Login />;
  } else if (currentPath === "/progress") {
    return (
      <Progress
        header="Look like you're lost"
        information="the page you are looking for is currently under development"
      />
    );
  } else if (
    currentPath === "/dashboard" ||
    currentPath.includes("/dashboard/reservations") ||
    currentPath.includes("/dashboard/eat-out")
  ) {
    return (
      <div className="layout__wrapper">
        <header className="header__wrapper">
          <Header />
        </header>
        <Navbar />
        <main className="content__wrapper">
          <Content />
        </main>
        <footer className="footer__wrapper">
          <Footer />
        </footer>
      </div>
    );
  } else {
    return (
      <Progress
        header="Look like you're lost"
        information="the page you are looking for is not available!"
      />
    );
  }
};

export default Layout;
