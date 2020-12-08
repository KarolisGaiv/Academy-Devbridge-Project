// import React from "react";
// import PropTypes from "prop-types";
// import RestaurantCard from "../RestaurantCard/RestaurantCard";
// import { Button } from "../../Button/Button";
// import { RestWebAddress } from "../../RestaurantInfo/RestWebAddress/RestWebAddress";
// import { Link } from "../../Link/Link";
// import "./restaurant-big-card.scss";

// export class RestaurantBigCard extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       // description: this.props.description,
//       expanded: false,
//       toggleClass: "collapsed",
//     };
//     this.showMore = this.showMore.bind(this);
//   }

//   showMore() {
//     !this.state.expanded
//       ? this.setState({ toggleClass: "collapsed" })
//       : this.setState({ toggleClass: "expanded" });
//   }

//   //   this.setState({
//   //     expanded: !expanded,
//   //   });
//   //   const toggledClass = expanded ? "expanded" : "collapsed";
//   // }

//   // toggleClass = () => {
//   //   if (this.state.expanded) {
//   //     return "expanded";
//   //   } else {
//   //     return "collapsed";
//   //   }
//   // };

//   render() {
//     const { expanded } = this.state;
//     const toggleClass = expanded ? "expanded" : "collapsed";

//     return (
//       <div className="restaurant-big-card">
//         <RestaurantCard
//           style="restaurant-card__top--fixed"
//           checkins={this.props.checkins}
//           image={this.props.image}
//           title={this.props.title}
//           rating={this.props.rating}
//           categories={this.props.categories}
//           hours={this.props.hours}
//         >
//           <div className="restaurant-card__bottom">
//             <RestWebAddress
//               icon="Globe"
//               text={this.props.web
//                 .replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")
//                 .split("/")}
//             />
//             <RestWebAddress icon="MapPin" text={this.props.address} />
//             {/* <p className={`restaurant-card__description`}>
//               {this.props.description}
//             </p> */}
//             <p className={`restaurant-card__description ${toggleClass}`}>
//               {this.props.description}
//             </p>
//             <div className="restaurant-card__button-field">
//               <Link path="#" handleClick={expanded}>
//                 {expanded ? "Read less" : "Read more"}
//               </Link>
//               <Button
//                 className="button button--enabled"
//                 typeName="button"
//                 handleClick={increaseCheckinNumber}
//               >
//                 check-in
//               </Button>
//             </div>
//           </div>
//         </RestaurantCard>
//       </div>
//     );
//   }
// }

// RestaurantBigCard.propTypes = {
//   web: PropTypes.string,
//   address: PropTypes.string,
//   checkins: PropTypes.number,
//   rating: PropTypes.array,
//   categories: PropTypes.array,
//   image: PropTypes.string,
//   title: PropTypes.string,
//   hours: PropTypes.string,
//   description: PropTypes.string,
// };

import React, { useState } from "react";
import PropTypes, { string } from "prop-types";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { Button } from "../../Button/Button";
import { RestWebAddress } from "../../RestaurantInfo/RestWebAddress/RestWebAddress";
import { Link } from "../../Link/Link";
import "./restaurant-big-card.scss";

export const RestaurantBigCard = (props) => {
  const [readMoreState, setReadMoreState] = useState({
    readMore: "collapsed",
    clicked: false,
  });

  const linkName = readMoreState ? "Read more" : "Read less";

  const changeDescriptionLength = () => {
    if (readMoreState.clicked) {
      setReadMoreState({
        readMore: "collapsed",
        clicked: false,
      });
    } else {
      setReadMoreState({
        readMore: "expanded",
        clicked: true,
      });
    }
  };

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

  return (
    <div className="restaurant-big-card">
      <RestaurantCard
        style="restaurant-card__top--fixed"
        checkins={checkinNumberState.checkinNumber}
        image={props.image}
        title={props.title}
        rating={props.rating}
        categories={props.categories}
        hours={props.hours}
      >
        <div className="restaurant-card__bottom">
          <RestWebAddress
            icon="Globe"
            text={props.web
              .replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")
              .split("/")}
          />
          <RestWebAddress icon="MapPin" text={props.address} />
          <p
            className={`restaurant-card__description ${readMoreState.readMore}`}
          >
            {props.description}
          </p>
          <div className="restaurant-card__button-field">
            <Link path="#" handleClick={changeDescriptionLength}>
              {linkName}
            </Link>
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
