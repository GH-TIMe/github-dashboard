import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useSelector, shallowEqual } from "react-redux";

function Pagination({ onClickPage }) {
  const { activePage, pagination } = useSelector(
    ({ pagination: { page, pagination } }) => ({
      activePage: page,
      pagination,
    }),
    shallowEqual
  );

  const hidden = [1, pagination[pagination.length - 1], "...", activePage];

  return pagination.length > 1 ? (
    <section className="pagination">
      <div className="container">
        <ul className="pagination__items">
          <li
            className={classNames("pagination__item pagination__item-outside", {
              disabled: activePage === 1,
            })}
            onClick={() => onClickPage(activePage - 1)}
          >
            <svg
              className="pagination__icon"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="chevron-left"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
              ></path>
            </svg>
            <span className="pagination__text">Previous</span>
          </li>
          {pagination.map((page, index) => (
            <li
              className={classNames("pagination__item", {
                active: page === activePage,
                disabled: page === "...",
                hidden: !hidden.includes(page),
              })}
              onClick={() => onClickPage(page)}
              key={`${page}_${index}`}
            >
              {page}
            </li>
          ))}
          <li
            className={classNames("pagination__item pagination__item-outside", {
              disabled: activePage === pagination[pagination.length - 1],
            })}
            onClick={() => onClickPage(activePage + 1)}
          >
            <span className="pagination__text">Next</span>
            <svg
              className="pagination__icon"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="chevron-left"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
              ></path>
            </svg>
          </li>
        </ul>
      </div>
    </section>
  ) : (
    ""
  );
}

Pagination.propTypes = {
  onClickPage: PropTypes.func,
};

Pagination.defaultProps = {
  onClickPage: () => {},
};

export default Pagination;
