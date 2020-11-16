import { useState } from "react";
import books from "../books";
import { BookWrapper, DeleteMe } from "../style";
import DeleteButton from "../buttons/DeleteButton";
import { Link } from "react-router-dom";
const BookItem = (props) => {
  const book = props.book;
  const bookId = book.id;
  return (
    <BookWrapper>
      <Link to={`/books/${book.slug}`}>
        <img src={book.image} />
      </Link>
      <p>{book.name}</p>
      <p className="book-price">{book.price} KWD</p>
      <DeleteButton bookId={book.id} deleteBook={props.deleteBook} />
    </BookWrapper>
  );
};
export default BookItem;
