import { useParams } from "react-router-dom";
import React, { useEffect, useState, useMemo } from "react";
import { ListSection } from "components/ListSection/ListSection";
import { SideFilters } from "components/SideFilters/SideFilters";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import "./reservations.scss";
import SearchSection from "components/SearchSection/SearchSection";
import { TagFilter } from "components/SideFilters/TagFilter";
import {
  SearchBarSearch,
  TagsSearch,
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
  else itemSingular = itemPlural.substring(0, itemPlural.length - 1); // remove s letter

  const { data, loading } = useFetch(`http://localhost:3008/${itemSingular}s`);

  const keysToSearch =
    itemSingular === "book"
      ? ["title", "author", "genre"]
      : itemSingular === "device"
      ? ["name", "deviceType", "os", "brand"]
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

  //search bar related states
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState("");
  const [searchValue, setSearchValue] = useState("All");

  //Search section tag buttons
  const [SearchSectionTags, setSearchSectionTags] = useState(
    searchSectionTagButtons
  );

  let results;
  //on Search button click
  const handleSearch = (searchTerm, dataToSearchIn, arrOfKeys) => {
    results = SearchBarSearch(searchTerm, dataToSearchIn, arrOfKeys);
    setSearchResults(results);
  };

  const handleSearchClick = (searchTerm, arrOfKeys) => {
    results = SearchBarSearch(searchTerm, productList, arrOfKeys);
    setSearchResults(results);
    searchTerm.trim() === ""
      ? setSearchValue("All")
      : setSearchValue(searchTerm.trim());
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

  const productList = useMemo(() => {
    return TagFilter(data[`${itemSingular}List`], filterList);
  }, [data, filterList, itemSingular]);

  //search bar input value handler
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  //search bar cancel icon handler
  const handleCancelClick = () => {
    setSearchTerm("");
    console.log(searchTerm);
    handleSearchClick(searchTerm, productList, keysToSearch);
  };

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
        handleSearch={() => handleSearchClick(searchTerm, keysToSearch)}
        tagButtons={SearchSectionTags}
        handleTagButtonClick={(i) =>
          TagsSearch(
            i,
            SearchSectionTags,
            setSearchSectionTags,
            productList,
            handleSearch,
            searchTerm,
            keysToSearch
          )
        }
      />
      <section className="reservations__section">
        <aside className="reservations__side-filters">
          <SideFilters
            filterCategories={data.filterCategories}
            filterList={filterList}
            addItemToFilterList={addItemToFilterList}
            clearFilterList={clearFilterList}
            deleteItemFromFilterList={deleteItemFromFilterList}
          />
        </aside>
        <section className="reservations__list ">
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
