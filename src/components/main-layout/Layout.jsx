import React from "react";
import "./Layout.scss";
import Header from "./layout-components/Header/Header";
import Navbar from "./layout-components/Navbar/Navbar";
import Content from "./layout-components/Content/Content";
import Footer from "./layout-components/Footer/Footer";

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
