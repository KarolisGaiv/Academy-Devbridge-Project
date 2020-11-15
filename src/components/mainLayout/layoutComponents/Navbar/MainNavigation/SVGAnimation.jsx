import React from "react";
import propTypes from "prop-types";

const SVGAnimation = (props) => {
  return (
    <animate
      dur={props.duration}
      attributeType={props.attType}
      begin={props.beginAnimation}
      attributeName={props.attName}
      fill={props.fill}
      from={props.from}
      to={props.to}
      id={props.id}
    />
  );
};

export default SVGAnimation;

SVGAnimation.propTypes = {
  duration: propTypes.string,
  attType: propTypes.string,
  beginAnimation: propTypes.string,
  attName: propTypes.string,
  fill: propTypes.string,
  from: propTypes.string,
  to: propTypes.string,
  id: propTypes.string,
};
