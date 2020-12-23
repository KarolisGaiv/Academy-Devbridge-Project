import React from "react";
import propTypes from "prop-types";
import SVGIcon from "components/SVGIcon/SVGIcon";
import "./modal.scss";

const Modal = (props) => {
  if (!props.open) return null;
  return (
    <div className="modal">
      <div
        className="modal__overlay"
        onClick={props.onClose}
        onKeyDown={() => {}}
        role="button"
        tabIndex={-1}
      />
      <div className="modal__content-wrapper">
        <button
          className="modal__close-button"
          type="button"
          onClick={props.onClose}
        >
          <SVGIcon name="X" className="modal__close-icon" />
        </button>
        <div className="modal__content">
          <div className="modal__head">
            <h3 className="modal__heading">{props.heading}</h3>
          </div>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  children: propTypes.elementType.isRequired,
  open: propTypes.bool.isRequired,
  onClose: propTypes.func,
  heading: propTypes.string,
};
