import React from "react";
import "../styles/SearchBar.scss";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="searchBar">
      <input
        className="searchBar__input"
        placeholder="Search by Doctor's name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
