import React from "react";
import PropTypes from "prop-types";

const StarRating = ({ count, value, onChange }) => {
  const stars = Array.from({ length: count }, () => "🟊");
  const handleChange = (value) => {
    onChange(value + 1);
  };

  return (
    <div>
      {stars.map((s, index) => {
        return (
          <div key={index}>
            <input
              className={"star"}
              key={index}
              placeholder={s}
              onClick={() => handleChange(index)}
              type="button"
              tabIndex={0}
              onKeyDown={() => handleChange(index)}
            />
          </div>
        );
      })}
      {value}
    </div>
  );
};

export default StarRating;

StarRating.propTypes = {
  onChange: PropTypes.string,
  count: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
  activeColor: PropTypes.string,
  value: PropTypes.string,
  inactiveColor: PropTypes.string,
};
