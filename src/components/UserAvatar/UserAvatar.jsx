import React from "react";
import PropTypes from "prop-types";
import "./userAvatar.scss";

const UserAvatar = (props) => {
  const styles = {
    height: props.size,
    width: props.size,
  };

  return (
    <div className="user-avatar" style={styles}>
      <img
        src={props.imageSrc}
        alt="User Profile"
        className="user-avatar__image"
      />
    </div>
  );
};

export default UserAvatar;

UserAvatar.PropTypes = {
  size: PropTypes.int,
  imageSrc: PropTypes.string,
};
