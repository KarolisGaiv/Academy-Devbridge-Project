import React from "react";
import "./Layout.scss";
import Header from "./Layout_components/Header/Header";
import Navbar from "./Layout_components/Navbar/Navbar";
import Content from "./Layout_components/Content/Content";
import Footer from "./Layout_components/Footer/Footer";

function Layout() {
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
}

export default Layout;
