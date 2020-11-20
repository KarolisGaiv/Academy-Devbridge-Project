import React from "react";
import PropTypes from "prop-types";
import "./eat-out-card.scss";

export class EatOutCard extends React.Component {
  render() {
    return (
      <>
        <div className="eat-out-card">{children}</div>
      </>
    );
  }
}

EatOutCard.propTypes = {
  children: PropTypes.object,
};
