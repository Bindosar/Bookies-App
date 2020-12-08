import React, { useState } from "react";
import { ListWrapper } from "../style";
import BookItem from "./BookItem";
import SearchBar from "./SearchBar";
import AddButton from "../buttons/AddButton";
import bookStore from "../stores/BookStore";
import { observer } from "mobx-react";

const BookList = ({ books }) => {
  const [query, setQuery] = useState("");

  const bookList2 = books
    .filter((book) => book.name.includes(query))
    .map((book) => <BookItem book={book} key={book.id} />);
  return (
    <>
      <div className="container">
        <SearchBar setQuery={setQuery} />
        <ListWrapper className="row">{bookList2}</ListWrapper>
      </div>
      <AddButton />
    </>
  );
};
export default observer(BookList);
