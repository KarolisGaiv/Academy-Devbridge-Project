import React, { useState } from "react";
import "./search-bar.scss";
import SVGIcon from "components/SVGIcon/SVGIcon";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCancelClick = () => {
    setInputValue("");
  };

  return (
    <div className="search-bar">
      <button className="search-bar__button" type="submit">
        <SVGIcon name="search" />
      </button>
      <input
        type="text"
        placeholder="Search"
        className="search-bar__text-field"
        value={inputValue}
        onChange={handleChange}
      />
      <button
        className={
          inputValue === ""
            ? "search-bar__button search-bar__button--hidden"
            : "search-bar__button"
        }
        onClick={handleCancelClick}
      >
        <SVGIcon name="cancel" />
      </button>
    </div>
  );
};

export default SearchBar;
