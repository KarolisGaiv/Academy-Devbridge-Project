import React, { useState } from "react";
import "./layout.scss";
import Header from "./layoutComponents/Header/Header";
import Navbar from "./layoutComponents/Navbar/Navbar";
import Content from "./layoutComponents/Content/Content";
import Footer from "./layoutComponents/Footer/Footer";
import Progress from "../../pages/progressPage/Progress";
import { Login } from "pages/Login";

const Layout = () => {
  const [notification, setNotification] = useState(false);
  let currentPath = window.location.pathname;

  if (currentPath === "/" || currentPath === "/register") {
    return <Login />;
  } else if (currentPath === "/progress") {
    return <Progress />;
  } else {
    return (
      <div className="layout__wrapper">
        <header className="header__wrapper">
          <Header notification={notification} />
        </header>
        <Navbar />
        <main className="content__wrapper">
          <Content setNotification={() => setNotification(true)} />
        </main>
        <footer className="footer__wrapper">
          <Footer />
        </footer>
      </div>
    );
  }
};

export default Layout;
