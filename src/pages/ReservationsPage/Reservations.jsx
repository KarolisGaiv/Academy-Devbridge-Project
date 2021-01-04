import React, { useEffect, useState, useMemo } from "react";
import { ListSection } from "components/ListSection/ListSection";
import { SideFilters } from "components/SideFilters/SideFilters";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import "./reservations.scss";
import SearchSection from "components/SearchSection/SearchSection";
import { TagFilter } from "components/SideFilters/TagFilter";
import SearchFunction from "../../components/SearchSection/Search/SearchFunction";

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
  const page = "book"; // fully responsive filter and list just need to change "device" to "book"
  const { data, loading } = useFetch(`http://localhost:3008/${page}s`);

  const keysToSearch =
    page === "book"
      ? ["title", "author", "genre"]
      : page === "device"
      ? ["name", "deviceType", "os", "brand"]
      : null;

  const searchSectionTagButtons = [
    { buttonText: "All", icon: "none", isSelected: false },
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

  //Search section tag buttons
  const [SearchSectionTags, setSearchSectionTags] = useState(
    searchSectionTagButtons
  );

  let results;

  //handle search section tags toggle
  const handleTagButtonClick = (i) => {
    let tagsList = [...SearchSectionTags];
    tagsList[i] = { ...tagsList[i], isSelected: !tagsList[i].isSelected };
    allTagClick(tagsList);
    tagClicks(tagsList);
  };
  //If Clicked on All tag, unselect other near tags
  const allTagClick = (list) => {
    if (list[list.findIndex((obj) => obj.buttonText === "All")].isSelected) {
      list.forEach((tag) => (tag.isSelected = false));
    }
    setSearchSectionTags(list);
  };

  //filter by Favorites and Available
  const tagClicks = (list) => {
    let searchResultsAll = productList;
    list.forEach((tag) => {
      if (tag.buttonText === "Available" && tag.isSelected) {
        searchResultsAll = searchResultsAll.filter(
          (obj) =>
            obj.bookedUntil === null ||
            obj.bookedUntil === "null" ||
            new Date(obj.bookedUntil) < new Date()
        );
      }
      if (tag.buttonText === "Favorites" && tag.isSelected) {
        searchResultsAll = searchResultsAll.filter(
          (obj) => obj.favourite === true
        );
      }
    });

    handleSearch(searchTerm, searchResultsAll, keysToSearch);
  };

  //on Search button click
  const handleSearch = (searchTerm, dataToSearchIn, arrOfKeys) => {
    results = SearchFunction(searchTerm, dataToSearchIn, arrOfKeys);
    setSearchResults(results);
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
    return TagFilter(data[`${page}List`], filterList);
  }, [data, filterList]);

  //search bar input value handler
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  //search bar cancel icon handler
  const handleCancelClick = () => {
    setSearchTerm("");
    handleSearch(searchTerm, productList, keysToSearch);
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
        handleSearch={() =>
          handleSearch(searchTerm, searchResults, keysToSearch)
        }
        tagButtons={SearchSectionTags}
        handleTagButtonClick={handleTagButtonClick}
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
          />
        </section>
      </section>
    </div>
  );
};

export default Reservations;
