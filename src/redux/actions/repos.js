import axios from "axios";

import { setTotalCount, setPagination } from "./pagination";

const BASE_PATH = "https://api.github.com/search/repositories";
const QUERY = "q=";
const DEFAULT_QUERY = "stars:>100";
const SORT = "sort=";
const ORDER = "order=";
const PAGE = "page=";
const PER_PAGE = "per_page=10";

export const fetchRepos = (searchQuery, sortBy, order, page) => (dispatch) => {
  dispatch(setLoadingStatus(false));
  const repos = axios.get(
    `${BASE_PATH}?${QUERY}${
      !searchQuery ? DEFAULT_QUERY : searchQuery
    }&${SORT}${sortBy}&${ORDER}${order}&${PAGE}${page}&${PER_PAGE}`
  );
  repos
    .then(({ data }) => {
      Promise.all([
        dispatch(setRepos(data)),
        dispatch(setTotalCount(data.total_count)),
        dispatch(setPagination(page)),
        axios
          .all(
            data.items.map(({ full_name }) =>
              axios({
                method: "get",
                url: `https://api.github.com/repos/${full_name}/topics`,
                headers: {
                  Accept: "application/vnd.github.mercy-preview+json",
                },
              })
            )
          )
          .then(
            axios.spread((...responses) => dispatch(setTopics(responses))),
            () => dispatch(setTopics([]))
          ),
      ]);
    })
    .catch((error) =>
      alert(`${error}
      Reached rate limit: 60 requests per hour`)
    );
};

export const setLoadingStatus = (status) => ({
  type: "SET_LOADING_STATUS",
  loading: status,
});

export const setRepos = (repos) => ({
  type: "SET_REPOS",
  payload: repos,
});

export const setTopics = (arr) => ({
  type: "SET_TOPICS",
  topics: arr,
});
