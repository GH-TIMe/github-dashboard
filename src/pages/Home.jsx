import React from "react";
import { useDispatch } from "react-redux";

import {
  setOrder,
  setSearchQuery,
  setBestMatches,
  setPagination,
  setSort,
  setDefaultActivePage,
} from "../redux/actions";

import { Header, SearchLine, Sort, Repos, Pagination } from "../components";

function Home() {
  const dispatch = useDispatch();

  const onSelectSort = (sortBy) => dispatch(setSort(sortBy));

  const onSelectOrder = (order) => dispatch(setOrder(order));

  const onInputSearchQuery = (e, searchQuery) => {
    e.preventDefault();
    const cleanSearchQuery = searchQuery.trim();
    dispatch(setSearchQuery(cleanSearchQuery));
    localStorage.setItem("query", cleanSearchQuery);
    dispatch(setBestMatches());
    localStorage.setItem("sort", "");
    dispatch(setDefaultActivePage());
    localStorage.setItem("page", 1);
  };

  const onSelectPage = (page) => {
    dispatch(setPagination(page));
    localStorage.setItem("page", page);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      <Header />
      <SearchLine onSubmitSearchQuery={onInputSearchQuery} />
      <Sort onClickSort={onSelectSort} onClickOrder={onSelectOrder} />
      <Repos />
      <Pagination onClickPage={onSelectPage} />
    </>
  );
}

export default Home;
