import React, { useState } from "react";
import "./progress.scss";
import { Redirect } from "react-router-dom";
import { Button } from "components/Button/Button";
import { CardContainer } from "components/CardContainer/CardContainer";

const Progress = () => {
  const [redirect, setRedirect] = useState(false);

  if (redirect) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <section className="progress">
      <CardContainer styleName="card-container--shadow progress__image-card">
        <h1 className="progress__header">404</h1>
        <img
          className="progress__image"
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt=""
        />
        <div className="progress__information">
          <h2 className="progress__information-header">
            Look like you&apos;re lost
          </h2>
          <div className="progress__information-text">
            the page you are looking for is currently under development
          </div>
          <Button
            className="button button--enabled"
            handleClick={() => setRedirect(!redirect)}
          >
            Go to Home
          </Button>
        </div>
      </CardContainer>
    </section>
  );
};

export default Progress;
