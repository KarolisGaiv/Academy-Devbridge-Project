import React, { useLayoutEffect, useState, useEffect, useRef } from "react";
import PropTypes, { string } from "prop-types";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { Button } from "../../Button/Button";
import { RestWebAddress } from "../../RestaurantInfo/RestWebAddress/RestWebAddress";
import { Link } from "../../Link/Link";
import "./restaurant-big-card.scss";

// const useWindowSize = () => {
//   const [size, setSize] = useState([0, 0]);
//   useLayoutEffect(() => {
//     const updateSize = () => {
//       setSize([window.innerWidth, window.innerHeight]);
//     };
//     window.addEventListener("resize", updateSize);
//     updateSize();
//     return () => window.removeEventListener("resize", updateSize);
//   }, []);
//   return size;
// };

export const RestaurantBigCard = (props) => {
  //Toggles between classes 'expanded' and 'collapsed':
  const [expanded, setExpanded] = useState(false);

  const toggledClass = expanded
    ? "restaurant-card__description restaurant-card__description--expanded"
    : "restaurant-card__description restaurant-card__description--collapsed";

  //Changes checkins' number after button is clicked:
  const [checkinNumberState, setCheckinNumberState] = useState({
    checkinNumber: props.checkins,
    clicked: false,
  });

  const increaseCheckinNumber = () => {
    if (checkinNumberState.clicked) {
      setCheckinNumberState({
        checkinNumber: checkinNumberState.checkinNumber - 1,
        clicked: false,
      });
    } else {
      setCheckinNumberState({
        checkinNumber: checkinNumberState.checkinNumber + 1,
        clicked: true,
      });
    }
  };

  //Adds READ MORE / READ LESS only if there is an overflow:
  const [overflowActive, setOverflowActive] = useState(false);

  const isEllipsisActive = (element) => {
    return (
      element.offsetHeight < element.scrollHeight ||
      element.offsetWidth < element.scrollWidth
    );
  };

  useEffect(() => {
    setOverflowActive(isEllipsisActive(paragraph.current));
  }, []);

  //Reacts to window resize event to add or remove READ MORE / READ LESS:
  // const [screenSize, setScreenSize] = useState(window.innerWidth);
  // const [screenSize, setScreenSize] = useState(window.innerWidth);

  // useEffect(() => {
  //   const updateSize = () => {
  //     setScreenSize(window.innerWidth);
  //   };
  //   window.addEventListener("resize", updateSize);
  //   updateSize();
  //   return () => window.removeEventListener("resize", updateSize);
  // }, []);

  // const useWindowSize = () => {
  //   const [size, setSize] = useState([0, 0]);
  //   useLayoutEffect(() => {
  //     const updateSize = () => {
  //       setSize([window.innerWidth, window.innerHeight]);
  //     };
  //     window.addEventListener("resize", updateSize);
  //     updateSize();
  //     return () => window.removeEventListener("resize", updateSize);
  //   }, []);
  //   return size;
  // };

  // const useWindowDimension = () => {
  //   const [dimension, setDimension] = useState([
  //     window.innerWidth,
  //     window.innerHeight,
  //   ]);
  //   useEffect(() => {
  //     const debouncedResizeHandler = debounce(() => {
  //       setDimension([window.innerWidth, window.innerHeight]);
  //     }, 100);
  //     window.addEventListener("resize", debouncedResizeHandler);
  //     return () => window.removeEventListener("resize", debouncedResizeHandler);
  //   }, []);
  //   return dimension;
  // };

  // useWindowDimension();

  // const debounce = (fn, ms) => {
  //   let timer;
  //   return (_) => {
  //     clearTimeout(timer);
  //     timer = setTimeout((_) => {
  //       timer = null;
  //       fn.apply(this, arguments);
  //     }, ms);
  //   };
  // };

  const paragraph = useRef(null);

  return (
    <div className="restaurant-big-card">
      <RestaurantCard
        customClass="restaurant-card__top--fixed"
        checkins={checkinNumberState.checkinNumber}
        image={props.image}
        title={props.title}
        rating={props.rating}
        categories={props.categories}
        hours={props.hours}
      >
        <div className="restaurant-card__bottom">
          <RestWebAddress
            className="restaurant-contact__text--link"
            icon="Globe"
            text={props.web
              .replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")
              .split("/")}
            href={props.web}
          />
          <RestWebAddress icon="MapPin" text={props.address} />
          <p className={toggledClass} ref={paragraph}>
            {props.description}
          </p>
          <div className="restaurant-card__button-field">
            {overflowActive && (
              <Link handleClick={() => setExpanded(!expanded)}>
                {expanded ? "Read less" : "Read more"}
              </Link>
            )}
            <Button
              className="button button--enabled"
              typeName="button"
              handleClick={increaseCheckinNumber}
            >
              check-in
            </Button>
          </div>
        </div>
      </RestaurantCard>
    </div>
  );
};

RestaurantBigCard.propTypes = {
  web: PropTypes.string,
  address: PropTypes.string,
  checkins: PropTypes.number,
  rating: PropTypes.array,
  categories: PropTypes.array,
  image: PropTypes.string,
  title: PropTypes.string,
  hours: PropTypes.string,
  description: PropTypes.string,
  toggleClass: string,
};
