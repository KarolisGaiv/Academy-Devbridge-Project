import React, { useState } from "react";
import PropTypes from "prop-types";
import { CardContainer } from "../CardContainer/CardContainer";
import { Rating } from "../Rating/Rating";
import { HeartButton } from "../HeartButton/HeartButton";
import { Link } from "../Link/Link";
import { Button } from "../Button/Button";
import "./restaurant-interactions-banner.scss";

export const RestaurantInteractionsBanner = (props) => {
  const [checkinNumberState, setCheckinNumberState] = useState({
    checkinNumber: props.checkins,
    clicked: false,
  });

  const updateCheckinNumber = () => {
    if (checkinNumberState.clicked) {
      setCheckinNumberState({
        checkinNumber: props.checkins,
        clicked: false,
      });
    } else {
      setCheckinNumberState({
        checkinNumber: checkinNumberState.checkinNumber + 1,
        clicked: true,
      });
    }
  };
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = () => {
    updateCheckinNumber();
    setButtonClicked(!buttonClicked);
  };

  return (
    <div className="restaurant-interactions-banner">
      <CardContainer styleName="card-container--colored">
        <div className="restaurant-interactions-banner__banner-flex">
          <div className="restaurant-interactions-banner__rating-heart">
            <Rating rating={props.rating} />
            <div className="restaurant-interactions-banner__heart-button-box">
              <HeartButton />
            </div>
          </div>
          <p className="restaurant-interactions-banner__check-in-textbox">
            {checkinNumberState.checkinNumber} people already checked-in!
          </p>
          <div className="restaurant-interactions-banner__link-button">
            <Link>Invite</Link>
            <Button
              className="button button--enabled"
              typeName="button"
              handleClick={handleClick}
            >
              {buttonClicked ? "check-out" : "check-in"}
            </Button>
          </div>
        </div>
      </CardContainer>
    </div>
  );
};

RestaurantInteractionsBanner.propTypes = {
  rating: PropTypes.array,
  checkins: PropTypes.number,
};
