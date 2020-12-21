import React from "react";
// import PropTypes from "prop-types"; will be needed when side filter will be merged
import "./list-section.scss";
import db from "../../db.json";
import { ListItemCard } from "./ListItemCard/ListItemCard";

export const ListSection = () => {
  // fully responsive needs only to change productList
  // const productList = db.devices.deviceList;
  const productList = db.books.bookList;

  return (
    <div className="list-section">
      <div className="list-section__results">
        {`${productList.length} results for:`}
        <div className="list-section__categories">{` All`}</div>
      </div>
      {Object.keys(productList).map((key, index) => {
        return (
          <ListItemCard
            key={index}
            image={productList[key].image}
            author={productList[key].author}
            brand={productList[key].brand}
            title={productList[key].title}
            name={productList[key].name}
            bookedUntil={productList[key].bookedUntil}
            rating={productList[key].rating}
            quantity={productList[key].quantity}
          />
        );
      })}
    </div>
  );
};

// ListSection.propTypes = {}; will be needed when side filter will be merged
