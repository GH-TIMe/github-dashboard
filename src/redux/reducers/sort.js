const initialState = {
  sortBy: localStorage.getItem("sort") || "",
};

const sort = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SORT":
      return {
        ...state,
        sortBy: action.payload,
      };
    case "SET_BEST_MATCHES":
      return initialState;
    default:
      return { ...state };
  }
};

export default sort;
