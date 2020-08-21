import React from "react";
import { useSelector } from "react-redux";
import CardPreLoader from "./CardPreLoader";

function Card() {
  const { card, isLoaded } = useSelector(({ card }) => card);
  const {
    repoName,
    repoNameUrl,
    authorName,
    authorUrl,
    avatarUrl,
    description,
    contributors,
    languages,
    stars,
    starsUrl,
    lastCommit,
  } = card;
  localStorage.setItem("card", JSON.stringify(card));

  return Object.keys(card).length ? (
    <section className="card">
      <div className="container container_card">
        <div className="card__header">
          <div className="card__title">
            <h2 className="card__name">
              <a
                className="link link_header"
                href={authorUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {authorName}
              </a>
            </h2>
            <span className="card__backslash">/</span>
            <h2 className="card__name">
              <a
                className="link link_header"
                href={repoNameUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {repoName}
              </a>
            </h2>
          </div>

          <div className="repo__stats card__stats-top">
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
        </div>

        <div className="card__body">
          <a
            className="card__link"
            href={authorUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="card__avatar" src={avatarUrl} alt="author avatar" />
          </a>

          <div className="card__info">
            <p className="card__description">{description}</p>

            {isLoaded ? (
              <>
                <ul className="card__languages">
                  {languages &&
                    languages.map((lang, index) => (
                      <li className="card__lang" key={`${lang}_${index}`}>
                        {lang}
                      </li>
                    ))}
                </ul>

                <ul className="contributors">
                  {contributors &&
                    contributors.map(({ id, login, html_url, avatar_url }) => (
                      <li title={login} className="contributors__item" key={id}>
                        <a
                          className="card__link"
                          href={html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            className="contributors__img"
                            src={avatar_url}
                            alt="contributor"
                          />
                        </a>
                      </li>
                    ))}
                </ul>
              </>
            ) : (
              <CardPreLoader />
            )}

            <div className="repo__stats card__stats-bottom">
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
          </div>
        </div>
      </div>
    </section>
  ) : (
    ""
  );
}

export default Card;
