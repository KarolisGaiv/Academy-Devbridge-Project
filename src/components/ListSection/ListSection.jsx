import React from "react";
// import PropTypes from "prop-types"; will be needed when side filter will be merged
import "./list-section.scss";
import db from "../../db.json";
import { Pagination } from "../Pagination/Pagination";

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
      <Pagination list={productList} />
    </div>
  );
};

// ListSection.propTypes = {}; will be needed when side filter will be merged
