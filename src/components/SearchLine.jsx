import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector, shallowEqual } from "react-redux";

function SearchLine({ onSubmitSearchQuery }) {
  const { searchQuery } = useSelector(({ search }) => search, shallowEqual);
  const [value, setValue] = useState(searchQuery);

  const setInputValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="search-line">
      <div className="container">
        <form
          className="search-line__inner"
          onSubmit={(e) => onSubmitSearchQuery(e, value)}
        >
          <input
            className="search-line__input"
            type="text"
            value={value}
            onChange={(e) => setInputValue(e)}
            placeholder="repository name"
          />
          <button className="button button__search">
            <svg
              className="button__icon"
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="48px"
              height="48px"
            >
              <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}

SearchLine.propTypes = {
  onSubmitSearchQuery: PropTypes.func,
};

SearchLine.defaultProps = {
  onSubmitSearchQuery: () => {},
};

export default SearchLine;
