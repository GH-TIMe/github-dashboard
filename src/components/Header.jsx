import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <svg
            className="header__logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
          >
            <path d="M 10 2 C 8.346 2 7 3.346 7 5 L 7 41 C 7 42.654 8.346 44 10 44 L 11 44 L 11 42 L 10 42 C 9.449 42 9 41.552 9 41 L 9 36 L 41 36 L 41 41 C 41 41.552 40.552 42 40 42 L 25 42 L 25 44 L 40 44 C 41.654 44 43 42.654 43 41 L 43 5 C 43 3.346 41.654 2 40 2 L 10 2 z M 14 8 L 18 8 L 18 12 L 14 12 L 14 8 z M 14 17 L 18 17 L 18 21 L 14 21 L 14 17 z M 14 26 L 18 26 L 18 30 L 14 30 L 14 26 z M 13 38 L 13 48.625 L 18 46.125 L 23 48.625 L 23 38 L 13 38 z" />
          </svg>
          <h1 className="header__title">GitHub DashBoard</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
