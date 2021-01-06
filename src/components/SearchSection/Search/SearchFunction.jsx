const SearchBarSearch = (searchTerm, data, keys) => {
  const loweredSearchTerm = searchTerm.toLowerCase();
  return data.filter(function (search) {
    return keys.some((key) =>
      String(search[key]).toLowerCase().includes(loweredSearchTerm)
    );
  });
};

//handle search section tags toggle
const TagsSearch = (
  i,
  SearchTags,
  setSearchTags,
  productList,
  handleFunction,
  searchTerm,
  keysToSearch
) => {
  let tagsList = [...SearchTags];
  tagsList.forEach((tag) => {
    if (tag.buttonText !== "All" && tag === tagsList[i]) {
      tagsList
        .filter((tag) => tag.buttonText === "All")
        .map((tag) => (tag.isSelected = false));
      tag.isSelected = !tag.isSelected;
    }
    if (tag.buttonText === "All" && tag === tagsList[i]) {
      tagsList
        .filter((tag) => tag.buttonText !== "All")
        .map((tag) => (tag.isSelected = false));
      tagsList[i].isSelected = !tagsList[i].isSelected;
    }
    if (tagsList.filter((tag) => tag.isSelected === false).length === 3) {
      tagsList
        .filter((tag) => tag.buttonText === "All")
        .map((tag) => (tag.isSelected = true));
    }
  });
  setSearchTags(tagsList);
  FilterByTags(tagsList, productList, handleFunction, searchTerm, keysToSearch);
};

//filter by Favorites and Available, by All
const FilterByTags = (
  list,
  productList,
  handleFunction,
  searchTerm,
  keysToSearch
) => {
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
  handleFunction(searchTerm, searchResultsAll, keysToSearch);
};

export { SearchBarSearch, TagsSearch };
