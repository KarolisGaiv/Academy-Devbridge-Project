import React from "react";
import PropTypes from "prop-types";
import "./list-section.scss";
import { ListItemCard } from "./ListItemCard/ListItemCard";
import { XButton } from "../XButtonForReservations/XButton";

export const ListSection = (props) => {
  const { productList, filterList, deleteItemFromFilterList } = props;
  const filterValues = Array.prototype.concat.apply(
    [],
    Object.values(filterList)
  );

  return (
    <div className="list-section">
      <div className="list-section__results">
        <div className="list-section__result-text">{`${productList.length} results for:`}</div>
        <div className="list-section__search-results">{` All`}</div>
        <div className="list-section__filter-results">
          {filterValues.map((value, index) => {
            return (
              <XButton
                key={index}
                customClass="list-section__filter-item"
                handleClick={() => {
                  const categoryTitle = Object.keys(filterList).find((key) => {
                    return filterList[key].some((item) => {
                      return item === value;
                    });
                  });

                  deleteItemFromFilterList(categoryTitle, value);
                }}
              >
                {value}
              </XButton>
            );
          })}
        </div>
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

ListSection.propTypes = {
  productList: PropTypes.array,
  filterList: PropTypes.object,
  deleteItemFromFilterList: PropTypes.func,
};
