import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useSelector, shallowEqual } from "react-redux";

function Sort({ items, onClickSort, onClickOrder }) {
  const { order, sortBy, totalCount } = useSelector(
    ({ order: { order }, sort: { sortBy }, pagination: { totalCount } }) => ({
      sortBy,
      order,
      totalCount,
    }),
    shallowEqual
  );

  const handleActiveSortItem = (type) => {
    if (type === sortBy && type) {
      const changeOrder = order === "desc" ? "asc" : "desc";
      localStorage.setItem("order", changeOrder);
      onClickOrder(changeOrder);
    } else {
      onClickSort(type);
      localStorage.setItem("sort", type);
      onClickOrder("desc");
      localStorage.setItem("order", "desc");
    }
  };

  return totalCount > 1 ? (
    <section className="sort">
      <div className="container">
        <div className="sort__inner">
          <span className="sort__title">Sort options:</span>
          <ul className="sort__items">
            {items &&
              items.map(({ name, type }, index) => (
                <li
                  className={classNames("sort__item", {
                    active: type === sortBy,
                  })}
                  onClick={() => handleActiveSortItem(type)}
                  key={`${type}_${index}`}
                >
                  <span>{name}</span>
                  {type === sortBy && type ? (
                    order === "desc" ? (
                      <svg
                        className="sort__icon icon__desc"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="sort-amount-down"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M304 416h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-128-64h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.37 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352zm256-192H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-64 128H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM496 32H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        className="sort__icon icon__asc"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="sort-amount-up"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M304 416h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM16 160h48v304a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V160h48c14.21 0 21.38-17.24 11.31-27.31l-80-96a16 16 0 0 0-22.62 0l-80 96C-5.35 142.74 1.77 160 16 160zm416 0H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-64 128H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM496 32H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
                        ></path>
                      </svg>
                    )
                  ) : (
                    ""
                  )}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  ) : (
    ""
  );
}

Sort.propTypes = {
  onClickSort: PropTypes.func,
  onClickOrder: PropTypes.func,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string,
    })
  ),
};

Sort.defaultProps = {
  onClickSort: () => {},
  onClickOrder: () => {},
  items: [
    {
      name: "best match",
      type: "",
    },
    {
      name: "stars",
      type: "stars",
    },
    {
      name: "forks",
      type: "forks",
    },
    {
      name: "commit date",
      type: "updated",
    },
  ],
};

export default Sort;
