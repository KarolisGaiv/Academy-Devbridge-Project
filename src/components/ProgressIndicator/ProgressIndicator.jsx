import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as ProgressBar } from "assets/progressBar.svg";
import "./progress-indicator.scss";

export const ProgressIndicator = ({ progressMessage }) => (
  <div className="progress-block">
    <div className="progress-block__bar">
      <ProgressBar />
    </div>
    <div className="progress-block__message">{progressMessage}</div>
  </div>
);

ProgressIndicator.propTypes = {
  progressMessage: PropTypes.string,
  className: PropTypes.string,
};
