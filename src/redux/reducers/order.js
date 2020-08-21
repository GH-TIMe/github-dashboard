const initialState = {
  order: localStorage.getItem("order") || "desc",
};

const order = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ORDER":
      return {
        ...state,
        order: action.payload,
      };
    default:
      return { ...state };
  }
};

export default order;
