import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import Repo from "./Repo";
import PreLoader from "./PreLoader";

import { fetchRepos, fetchCard } from "../redux/actions";

function Repos() {
  const { repos, isLoaded, page, searchQuery, sortBy, order } = useSelector(
    ({
      repos: { repos, isLoaded },
      pagination: { page },
      search: { searchQuery },
      sort: { sortBy },
      order: { order },
    }) => ({
      repos,
      isLoaded,
      page,
      searchQuery,
      sortBy,
      order,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  const onClickRepo = (repo) => {
    dispatch(fetchCard(repo));
    localStorage.setItem("card", JSON.stringify(repo));
  };

  useEffect(() => {
    dispatch(fetchRepos(searchQuery, sortBy, order, page));
  }, [searchQuery, sortBy, order, page, dispatch]);

  return (
    <section className="repo">
      <div className="container container_repos">
        <ul className="repo__items">
          {isLoaded
            ? repos.map((props) => (
                <Repo {...props} key={props.id} onClickRepo={onClickRepo} />
              ))
            : [...Array(10)].map((_, index) => <PreLoader key={index} />)}
        </ul>
      </div>
    </section>
  );
}

export default Repos;
