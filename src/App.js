import React, { useEffect } from "react";
import Layout from "components/mainLayout/Layout";
import { BrowserRouter as Router, useLocation } from "react-router-dom";

const App = () => {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }
  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Layout />
      </Router>
    </div>
  );
};

export default App;
