const SearchFunction = (searchTerm, data, keys) => {
  const loweredSearchTerm = searchTerm.toLowerCase();
  return data.filter(function (search) {
    return keys.some((key) =>
      String(search[key]).toLowerCase().includes(loweredSearchTerm)
    );
  });
};

export default SearchFunction;
