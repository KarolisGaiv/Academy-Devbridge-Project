import React, { useEffect } from "react";
import Layout from "components/mainLayout/Layout";
import { Login } from "pages/Login";
import { BrowserRouter as Router, useLocation } from "react-router-dom";

const App = () => {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  let currentPath = window.location.pathname;
  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        {currentPath === "/" ? (
          <Login />
        ) : currentPath === "/register" ? (
          <Login />
        ) : (
          <Layout />
        )}
      </Router>
    </div>
  );
};

export default App;
