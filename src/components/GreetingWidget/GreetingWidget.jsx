import React, { useEffect, useState } from "react";
import Greeting from "../UserGreeting/UserGreeting";
import Clock from "../Clock/Clock";
import "./greeting-widget.scss";

const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    }

    fetchMyAPI();
  }, [url]);

  return { data };
};

export const Widget = () => {
  const { data } = useFetch("http://localhost:3008/userData");

  return (
    <div className="widget-block">
      <Clock />
      <Greeting name={data.userName} />
    </div>
  );
};

export default Widget;
