import React from "react";
import "./layout.scss";
import Header from "./layoutComponents/Header/Header";
import Navbar from "./layoutComponents/Navbar/Navbar";
import Content from "./layoutComponents/Content/Content";
import Footer from "./layoutComponents/Footer/Footer";

const Layout = () => {
  return (
    <div className="layout__wrapper">
      <header className="header__wrapper">
        <Header />
      </header>
      <aside className="navbar__wrapper">
        <Navbar />
      </aside>
      <main className="content__wrapper">
        <Content />
      </main>
      <footer className="footer__wrapper">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
