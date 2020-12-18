import React, { useEffect, useState } from "react";
import { SideFilters } from "components/SideFilters/SideFilters";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import "./reservations.scss";

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
  const page = "devices"; // fully responsive filter just need to change "devices" to "books"
  const { data, loading } = useFetch(`http://localhost:3008/${page}`);
  const filterCategories = data.filterCategories;

  //object for filter collecstion
  const [filterList, setFilterList] = useState({});

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

  return loading ? (
    <div>...loading</div>
  ) : (
    <div className="reservations">
      <Breadcrumbs />
      <section className="reservations__section">
        <aside className="reservations__side-filters">
          <SideFilters
            filterCategories={filterCategories}
            filterList={filterList}
            addItemToFilterList={addItemToFilterList}
            clearFilterList={clearFilterList}
            deleteItemFromFilterList={deleteItemFromFilterList}
          />
        </aside>

        <section>
          {Object.keys(filterList).map((key, index) => {
            const test = `${key}: ${filterList[key]}`;
            return <div key={index}>{test}</div>;
          })}
        </section>
      </section>
    </div>
  );
};

export default Reservations;
