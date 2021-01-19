import React from "react";
import "./layout.scss";
import Header from "./layoutComponents/Header/Header";
import Navbar from "./layoutComponents/Navbar/Navbar";
import Content from "./layoutComponents/Content/Content";
import Footer from "./layoutComponents/Footer/Footer";
import Progress from "../../pages/progressPage/Progress";
import { Login } from "pages/Login";
import propTypes from "prop-types";

const Layout = ({ path }) => {
  if (path === "/" || path === "/register") {
    return <Login />;
  } else if (path === null || path === undefined) {
    return (
      <Progress
        header="Look like you're lost"
        information="the page you are looking for is currently under development"
      />
    );
  } else if (
    path === "/dashboard" ||
    path.includes("/dashboard/reservations") ||
    path.includes("/dashboard/eat-out")
  ) {
    return (
      <div className="layout__wrapper">
        <header className="header__wrapper">
          <Header />
        </header>
        <Navbar />
        <main className="content__wrapper">
          <Content path={path} />
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

Layout.propTypes = {
  path: propTypes.string,
};
