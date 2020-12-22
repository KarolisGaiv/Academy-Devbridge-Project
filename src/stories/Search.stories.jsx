import React, { useState } from "react";
import fakeData from "../db.json";

export default {
  title: "Components / Search",
};

export const Search = () => {
  const dataTruncated = fakeData.devices.deviceList;
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(dataTruncated);

  //get input value
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  //loop through selected object keys and their values to find match
  const filteredResults = (data, keys) => {
    const loweredSearchTerm = searchTerm.toLowerCase();
    return data.filter(function (search) {
      return keys.some((key) =>
        String(search[key]).toLowerCase().includes(loweredSearchTerm)
      );
    });
  };

  //show results on click
  const searchHandle = (dataToSearchIn, arrOfKeys) => {
    const results = filteredResults(dataToSearchIn, arrOfKeys);
    setSearchResults(results);
    setSearchTerm("");
  };

  const clearHandle = () => {
    setSearchTerm("");
  };

  const showAllHandle = () => {
    setSearchResults(dataTruncated);
  };
  return (
    <div>
      <input type="input" value={searchTerm} onChange={handleChange} />
      <button
        type="button"
        onClick={() => searchHandle(dataTruncated, ["name", "deviceType"])}
      >
        Search
      </button>
      <button type="button" onClick={clearHandle}>
        Clear
      </button>
      <button type="button" onClick={showAllHandle}>
        show all
      </button>
      {searchResults.map((data, index) => {
        return (
          <div
            key={data.id}
            style={{
              padding: "15px",
              border: "2px solid #000",
              margin: "10px",
            }}
          >
            <div>{data.name}</div>
            <div>{data.deviceType}</div>
            <div>{data.brand}</div>
            <div>{data.favourite}</div>
          </div>
        );
      })}
    </div>
  );
};
