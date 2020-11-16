import React, { useState } from "react";
import { ListWrapper } from "../style";
import BookItem from "./BookItem";
import SearchBar from "./SearchBar";
const BookList = (props) => {
  const [query, setQuery] = useState("");
  const bookList = props.books
    .filter((book) => book.name.includes(query))
    .map((book) => (
      <BookItem
        book={book}
        key={book.id}
        setBook={props.setBook}
        deleteBook={props.deleteBook}
      />
    ));
  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{bookList}</ListWrapper>
    </>
  );
};
export default BookList;
