import axios from "axios";

export const fetchCard = (repo) => (dispatch) => {
  dispatch(setLoadingStatus(false));
  Promise.all([
    dispatch(setCard(repo)),
    axios.get(repo.languagesUrl).then(
      (langs) => dispatch(setLanguages(langs.data)),
      () => dispatch(setLanguages({}))
    ),
    axios.get(repo.contributorsUrl + "?per_page=10").then(
      (contrs) => dispatch(setContributors(contrs.data)),
      () => dispatch(setContributors([]))
    ),
  ]);
};

export const setCard = (repo) => ({
  type: "SET_CARD",
  repo,
});

export const setLanguages = (langs) => ({
  type: "SET_LANGUAGES",
  langs: Object.keys(langs),
});

export const setContributors = (contrs) => ({
  type: "SET_CONTRIBUTORS",
  contrs: contrs,
});

export const setLoadingStatus = (status) => ({
  type: "SET_LOADING_STATUS",
  status,
});
