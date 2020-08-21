const initialState = {
  isLoaded: true,
  card: JSON.parse(localStorage.getItem("card")) || {},
};

const card = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CARD": {
      return { ...state, card: action.repo };
    }
    case "SET_LANGUAGES": {
      action.langs.splice(10);
      return {
        ...state,
        card: {
          ...state.card,
          languages: action.langs,
        },
      };
    }
    case "SET_CONTRIBUTORS": {
      return {
        ...state,
        card: {
          ...state.card,
          contributors: action.contrs,
        },
        isLoaded: true,
      };
    }
    case "SET_LOADING_STATUS": {
      return {
        ...state,
        isLoaded: action.status,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default card;
