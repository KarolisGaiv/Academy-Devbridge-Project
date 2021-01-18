import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { ListSection } from "components/ListSection/ListSection";
import { SideFilters } from "components/SideFilters/SideFilters";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import "./reservations.scss";
import SearchSection from "components/SearchSection/SearchSection";
import { TagFilter } from "components/SideFilters/TagFilter";
import {
  SearchBarSearch,
  TagsSearch,
  FilterByTags,
} from "../../components/SearchSection/Search/SearchFunction";
import { ProgressIndicator } from "components/ProgressIndicator/ProgressIndicator";
import CategoryCard from "components/CategoryCard/CategoryCard";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setLoading(false);
    }

    fetchMyAPI();
  }, [url]);

  return { data, loading };
};

const Reservations = () => {
  const { itemPlural } = useParams();
  let itemSingular;
  if (itemPlural === undefined) itemSingular = "book";
  else
    itemSingular = itemPlural
      .substring(0, itemPlural.length - 1)
      .split(" ")
      .join("");

  const { data, loading } = useFetch(`http://localhost:3008/${itemSingular}s`);

  const keysToSearch =
    itemSingular === "book"
      ? ["title", "author", "genre"]
      : itemSingular === "device"
      ? ["name", "deviceType", "os", "brand"]
      : itemSingular === "meetingRoom"
      ? ["name", "city", "district", "address"]
      : null;

  const searchSectionTagButtons = [
    { buttonText: "All", icon: "none", isSelected: true },
    {
      buttonText: "Favorites",
      icon: "heartBtnBold",
      isSelected: false,
    },
    {
      buttonText: "Available",
      icon: "available",
      isSelected: false,
    },
  ];

  //object for filter collecstion
  const [filterList, setFilterList] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [allResults, setAllResults] = useState([]);
  const [searchBarResults, setSearchBarResults] = useState([""]);
  const [SearchSectionTags, setSearchSectionTags] = useState(
    searchSectionTagButtons
  );
  const [searchValue, setSearchValue] = useState("All");

  const sideTagFilterResults = TagFilter(allResults, filterList);
  const searchBarFilterResults = searchBarResults;
  const searchTagFilterResults = FilterByTags(SearchSectionTags, allResults);

  const findMatchingResults = (...arrays) => {
    return arrays.reduce((includ, current) =>
      Array.from(new Set(includ.filter((a) => current.includes(a))))
    );
  };

  //handle "Results For" label
  const handleResultsFor = (searchTerm) => {
    searchTerm.trim() === ""
      ? setSearchValue("All")
      : setSearchValue(searchTerm.trim());
  };

  //handle Search Bar Results
  const handleBarSearch = () => {
    setSearchBarResults(SearchBarSearch(searchTerm, allResults, keysToSearch));
    handleResultsFor(searchTerm);
  };

  //search bar input value handler
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  //search bar cancel icon handler
  const handleCancelClick = () => {
    setSearchTerm("");
    handleResultsFor("");
    setSearchBarResults(SearchBarSearch("", allResults, keysToSearch));
  };

  //add new filter if it's not already exists
  const addItemToFilterList = (key, title) => {
    const isKey = Object.keys(filterList).some((item) => key === item);
    if (isKey) {
      setFilterList((prevFilterList) => {
        let filteredList = prevFilterList[key].filter((item) => item !== title);
        return { ...prevFilterList, [key]: [...filteredList, title] };
      });
    } else {
      setFilterList((prevFilterList) => {
        return { ...prevFilterList, [key]: [title] };
      });
    }
  };

  //delete filter if checkbox is unchecked
  const deleteItemFromFilterList = (key, title) => {
    setFilterList((prevFilterList) => {
      let filteredList = prevFilterList[key].filter((item) => item !== title);
      return { ...prevFilterList, [key]: [...filteredList] };
    });
  };

  //clear all items from selected list
  const clearFilterList = (key) =>
    setFilterList((prevFilterList) => {
      return { ...prevFilterList, [key]: [] };
    });

  useEffect(() => {
    setAllResults(data[`${itemSingular}List`]);
    setSearchBarResults(allResults);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, allResults]);

  return loading ? (
    <ProgressIndicator message="Loading..." />
  ) : (
    <div className="reservations">
      <Breadcrumbs />
      <header>
        <h1 className="reservations__header">
          {itemPlural ? itemPlural.substring(0, itemPlural.length - 1) : null}{" "}
          reservations
        </h1>
      </header>
      <section className="reservations__category-cards">
        <CategoryCard
          category="devices"
          icon="Phone"
          directTo="../../dashboard/reservations"
          component={itemPlural}
        />
        <CategoryCard
          category="books"
          icon="Book"
          directTo="../../dashboard/reservations"
          component={itemPlural}
        />
        <CategoryCard
          category="meeting Rooms"
          icon="Door"
          directTo="../../dashboard/reservations"
          component={itemPlural}
        />
      </section>
      <SearchSection
        inputValue={searchTerm}
        handleChange={handleChange}
        handleCancelClick={handleCancelClick}
        handleSearch={handleBarSearch}
        tagButtons={SearchSectionTags}
        handleTagButtonClick={(i) =>
          setSearchSectionTags(TagsSearch(i, SearchSectionTags))
        }
      />
      <section className="reservations__section reservations__section--column">
        <aside className="reservations__side-filters">
          <SideFilters
            filterCategories={data.filterCategories}
            filterList={filterList}
            addItemToFilterList={addItemToFilterList}
            clearFilterList={clearFilterList}
            deleteItemFromFilterList={deleteItemFromFilterList}
          />
        </aside>
        <section className="reservations__list">
          <ListSection
            productList={findMatchingResults(
              sideTagFilterResults,
              searchTagFilterResults,
              searchBarFilterResults === undefined
                ? [""]
                : searchBarFilterResults
            )}
            filterList={filterList}
            deleteItemFromFilterList={deleteItemFromFilterList}
            searchValue={searchValue}
          />
        </section>
      </section>
    </div>
  );
};

export default Reservations;
