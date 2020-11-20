import React from "react";
import PropTypes from "prop-types";
import "./eat-out-card-container.scss";

export class EatOutCardContainer extends React.Component {
  render() {
    return (
      <>
        <div className="eat-out-card">{this.props.children}</div>
      </>
    );
  }
}

EatOutCardContainer.propTypes = {
  children: PropTypes.object,
};
