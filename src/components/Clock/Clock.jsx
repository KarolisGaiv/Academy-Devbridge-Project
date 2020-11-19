import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./clock.scss";

export const Clock = () => {
  let [date, setDate] = useState(new Date());

  useEffect(() => {
    let timer = setInterval(() => setDate(new Date()), 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div>
      <div className="clock-wrapper">
        {date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
      </div>
    </div>
  );
};

export default Clock;
