import React from "react";
import { style, SearchBarStyled } from "../style";
const SearchBar = (props) => {
  return (
    <SearchBarStyled
      placeholder="Search for a book name"
      onChange={(event) => props.setQuery(event.target.value)}
    />
  );
};

export default SearchBar;
