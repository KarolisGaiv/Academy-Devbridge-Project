import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { ListSection } from "components/ListSection/ListSection";
import { SideFilters } from "components/SideFilters/SideFilters";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import "./reservations.scss";
import SearchSection from "components/SearchSection/SearchSection";
import { TagFilter, FilterAllItems } from "components/SideFilters/TagFilter";
import {
  SearchBarSearch,
  TagsSearch,
  FilterByTags,
} from "../../components/SearchSection/Search/SearchFunction";

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

  let results;
  let tagsList;
  let resultsByTags;

  //object for filter collecstion
  const [filterList, setFilterList] = useState({});

  //search bar related states
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState("");
  const [searchValue, setSearchValue] = useState("All");

  //////////////////////////////////////////////////////////////////////
  const sideTagFilterResults = TagFilter(
    data[`${itemSingular}List`],
    filterList
  );
  const searchBarFilterResults = [];
  const searchTagFilterResults = [];

  FilterAllItems([
    sideTagFilterResults,
    searchBarFilterResults,
    searchTagFilterResults,
  ]);

  //////////////////////////////////////////////////////////////////////

  //Search section tag buttons
  const [SearchSectionTags, setSearchSectionTags] = useState(
    searchSectionTagButtons
  );

  //handle "Results For" label
  const handleResultsFor = (searchTerm) => {
    searchTerm.trim() === ""
      ? setSearchValue("All")
      : setSearchValue(searchTerm.trim());
  };

  //handle Search Tags clicking
  const handleTagSearch = (
    searchTags,
    searchTerm,
    dataToSearchIn,
    arrOfKeys,
    i
  ) => {
    tagsList = TagsSearch(i, searchTags);
    setSearchSectionTags(tagsList);
    resultsByTags = FilterByTags(tagsList, dataToSearchIn);
    results = SearchBarSearch(searchTerm, resultsByTags, arrOfKeys);
    // return results;
    setSearchResults(results);
    handleResultsFor(searchTerm);
  };

  //handle Search Bar Results
  const handleBarSearch = (tagsList, searchTerm, dataToSearchIn, arrOfKeys) => {
    resultsByTags = FilterByTags(tagsList, dataToSearchIn);
    results = SearchBarSearch(searchTerm, resultsByTags, arrOfKeys);
    // return results;
    setSearchResults(results);
    handleResultsFor(searchTerm);
  };

  //search bar input value handler
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  //search bar cancel icon handler
  const handleCancelClick = () => {
    setSearchTerm("");
    handleBarSearch(SearchSectionTags, "", productList, keysToSearch);
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
  // eslint-disable-next-line react-hooks/exhaustive-deps

  // const productList = useMemo(() => data[`${itemSingular}List`], [data]);
  const productList = data[`${itemSingular}List`];
  useEffect(() => {
    setSearchResults(productList);
  }, [productList]);

  return loading ? (
    <div>...loading</div>
  ) : (
    <div className="reservations">
      <Breadcrumbs />
      <SearchSection
        inputValue={searchTerm}
        handleChange={handleChange}
        handleCancelClick={handleCancelClick}
        handleSearch={() =>
          handleBarSearch(
            SearchSectionTags,
            searchTerm,
            productList,
            keysToSearch
          )
        }
        tagButtons={SearchSectionTags}
        handleTagButtonClick={(i) =>
          handleTagSearch(
            SearchSectionTags,
            searchTerm,
            productList,
            keysToSearch,
            i
          )
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
            productList={searchResults}
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
