export const setPagination = (activePage) => ({
  type: "SET_PAGINATION",
  activePage,
});

export const setTotalCount = (count) => ({
  type: "SET_TOTAL_COUNT",
  count,
});

export const setDefaultActivePage = () => ({
  type: "SET_DEFAULT_ACTIVE_PAGE",
});
