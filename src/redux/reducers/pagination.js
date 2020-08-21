const initialState = {
  page: +localStorage.getItem("page") || 1,
  totalCount: +localStorage.getItem("totalCount") || 10,
  pagination: [],
};

const PER_PAGE = 10;

function doPagination(activePag = 1, pagesCount = 10) {
  if (pagesCount < 2) return [];
  if (pagesCount < 6) {
    return [...Array(pagesCount)].map((_, index) => index + 1);
  }
  if (activePag < 5) {
    return [1, 2, 3, 4, 5, "...", pagesCount];
  }
  if (activePag > pagesCount - 4) {
    return [
      1,
      "...",
      pagesCount - 4,
      pagesCount - 3,
      pagesCount - 2,
      pagesCount - 1,
      pagesCount,
    ];
  }
  return [1, "...", activePag - 1, activePag, activePag + 1, "...", pagesCount];
}

const pagination = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PAGINATION": {
      const pagesCount = Math.ceil(state.totalCount / PER_PAGE);
      if (window.innerWidth) {
      }
      return {
        ...state,
        page: action.activePage,
        pagination: doPagination(action.activePage, pagesCount),
      };
    }
    case "SET_TOTAL_COUNT": {
      const totalCount = action.count > 1000 ? 1000 : action.count;
      localStorage.setItem("totalCount", totalCount);
      return {
        ...state,
        totalCount,
      };
    }
    case "SET_DEFAULT_ACTIVE_PAGE": {
      return {
        ...state,
        page: 1,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default pagination;
