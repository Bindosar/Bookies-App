import { useState } from "react";
import books from "../books";
import { BookWrapper, DeleteMe } from "../style";
import DeleteButton from "../buttons/DeleteButton";
const BookItem = (props) => {
  const book = props.book;
  return (
    <BookWrapper>
      <img src={book.image} onClick={() => props.setBook(book)} />
      <p>{book.name}</p>
      <p className="book-price">{book.price} KWD</p>
      <DeleteButton bookId={book.id} deleteBook={props.deleteBook} />
    </BookWrapper>
  );
};
export default BookItem;
