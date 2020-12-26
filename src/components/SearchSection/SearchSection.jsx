import React from "react";
import "./search-section.scss";
import { CardContainer } from "components/CardContainer/CardContainer";
import TagButton from "./TagButton/TagButton";
import SearchBar from "./SearchBar/SearchBar";

const SearchSection = () => {
  return (
    <CardContainer styleName="card-container--shadow">
      <div className="search-section">
        <h2 className="search-section__title">Search</h2>
        <div className="search-section__tag-wrapper">
          <TagButton buttonText="All" icon="none" />
          <TagButton buttonText="Favorites" icon="heartBtnBold" />
          <TagButton buttonText="Available" icon="available" />
        </div>
        <SearchBar />
      </div>
    </CardContainer>
  );
};

export default SearchSection;
