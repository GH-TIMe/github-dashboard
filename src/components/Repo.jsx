import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Repo(props) {
  const {
    id,
    authorName,
    repoName,
    description,
    stars,
    starsUrl,
    lastCommit,
    topics,
    onClickRepo,
  } = props;
  return (
    <li className="repo__item" key={id}>
      <h2 className="repo__name">
        <Link
          className="link link_header"
          onClick={() => onClickRepo(props)}
          to="/github-dashboard/card"
        >
          {`${authorName}/${repoName}`}
        </Link>
      </h2>
      <ul className="repo__topics">
        {topics &&
          topics.map((topic, index) => (
            <li className="repo__topic" key={`${topic}_${index}`}>
              {topic}
            </li>
          ))}
      </ul>
      <p className="repo__description">{description}</p>
      <div className="repo__stats">
        <a
          className="link repo__stars"
          href={starsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="repo__stars-icon"
            aria-label="star"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            height="16"
            role="img"
          >
            <path
              fillRule="evenodd"
              d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
            />
          </svg>
          <span className="repo__stars-count">{stars}</span>
        </a>
        <div className="repo__commit-date">{lastCommit}</div>
      </div>
    </li>
  );
}

Repo.propTypes = {
  props: PropTypes.shape({
    id: PropTypes.number,
    authorName: PropTypes.string,
    repoName: PropTypes.string,
    description: PropTypes.string,
    stars: PropTypes.number,
    starsUrl: PropTypes.string,
    lastCommit: PropTypes.string,
    topics: PropTypes.arrayOf(PropTypes.string),
    onClickRepo: PropTypes.func,
  }),
};

Repo.defaultProps = {
  onSubmitSearchQuery: {},
};

export default Repo;
