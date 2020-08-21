const initialState = {
  searchQuery: localStorage.getItem("query") || "",
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SEARCH_QUERY":
      return {
        ...state,
        searchQuery: action.payload,
      };
    default:
      return { ...state };
  }
};

export default search;
