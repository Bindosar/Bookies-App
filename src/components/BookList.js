import React from "react";
import style from "../style";
import books from "../books";
import BookItem from "./BookItem";
const BookList = () => {
  const bookList = books.map((book) => (
    <BookItem book={book} key={book.name} />
  ));
  return <div style={style.booksContainer}>{bookList}</div>;
};
export default BookList;
