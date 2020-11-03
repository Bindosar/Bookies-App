import React from "react";
import { ListWrapper } from "../style";
import books from "../books";
import BookItem from "./BookItem";
const BookList = () => {
  const bookList = books.map((book) => (
    <BookItem book={book} key={book.name} />
  ));
  return <ListWrapper>{bookList}</ListWrapper>;
};
export default BookList;
