export const TagFilter = (productList, filterList) => {
  if (
    Object.keys(filterList).length === 0 ||
    Object.values(filterList).every((i) => i.length === 0)
  ) {
    return productList;
  } else {
    for (let key in filterList) {
      if (filterList[key].length === 0) {
        delete filterList[key];
      }
    }
    const filteredList = productList.filter((product) => {
      return Object.keys(filterList).every((key) => {
        return filterList[key].some((item) => {
          return Object.values(product).includes(item);
        });
      });
    });

    return filteredList;
  }
};

export const FilterAllItems = (filtersArray) => {
  // filtersArray structure
  // [
  //    [ {}, {}, {}... ], // sideTagFilterResults
  //    [ {}, {}, {}... ], // searchBarFilterResults
  //    [ {}, {}, {}... ], // searchTagFilterResults
  // ]

  let resultList = [];
  // [ {}, {}, {}... ] // resultList structure

  if (filtersArray.length === 1) resultList = [...filtersArray[0]];
  else {
    resultList = filterAndCompareArrays(filtersArray[0], filtersArray[1]);
  }

  if (filtersArray.length > 2) {
    for (let i = 2; i < filtersArray.length - 1; i++) {
      resultList = filterAndCompareArrays(resultList, filtersArray[i]);
    }
  }

  return resultList;
};

const filterAndCompareArrays = (arrayA, arrayB) => {
  const comapredArray = [];

  return comapredArray;
};
