import React from "react";
import PropTypes from "prop-types";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { Button } from "../../Button/Button";
import { RestWebAddress } from "../../RestaurantInfo/RestWebAddress/RestWebAddress";
import { Link } from "../../Link/Link";
import "./restaurant-big-card.scss";

export class RestaurantBigCard extends React.Component {
  constructor(props) {
    super(props);
    // this.description = this.props.description;
    this.state = {
      expanded: false,
    };
    this.toggledClass = this.toggledClass.bind(this);
  }

  // changeClass() {
  //   this.setState({
  //     expanded: !expanded,
  //   });
  //   const toggledClass = expanded ? "expanded" : "collapsed";
  // }

  toggledClass = () => {
    if (this.state.expanded) {
      return "expanded";
    } else {
      return "collapsed";
    }
  };

  render() {
    const { expanded } = this.state;
    // const toggledClass = expanded ? "expanded" : "collapsed";

    return (
      <div className="restaurant-big-card">
        <RestaurantCard
          style="restaurant-card__top--fixed"
          checkins={this.props.checkins}
          src={this.props.image}
          title={this.props.title}
          rating={this.props.rating}
          categories={this.props.categories}
          hours={this.props.hours}
        >
          <div className="restaurant-card__bottom">
            <RestWebAddress
              icon="Globe"
              text={this.props.web
                .replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")
                .split("/")}
            />
            <RestWebAddress icon="MapPin" text={this.props.address} />
            {/* <p className={`restaurant-card__description`}>
              {this.props.description}
            </p> */}
            <p className={`restaurant-card__description ${this.toggledClass}`}>
              {this.props.description}
            </p>
            <div className="restaurant-card__button-field">
              <Link
                path="#"
                handleClick={() => this.setState({ expanded: !expanded })}
              >
                {expanded ? "Read less" : "Read more"}
              </Link>
              <Button
                className="button button--enabled"
                typeName="button"
                //   handleClick={increaseCheckin}
              >
                check-in
              </Button>
            </div>
          </div>
        </RestaurantCard>
      </div>
    );
  }
}

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
};
