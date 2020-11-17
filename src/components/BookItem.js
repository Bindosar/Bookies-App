import { useState } from "react";
import books from "../books";
import { BookWrapper, DeleteMe } from "../style";
import DeleteButton from "../buttons/DeleteButton";
import { Link } from "react-router-dom";
const BookItem = (props) => {
  const { book } = props;
  const bookId = book.id;
  return (
    <BookWrapper className="col-lg-3 col-md-4 col-sm-6">
      <Link
        to={`/books/${book.slug}`}
        className="d-flex justify-content-center"
      >
        <img src={book.image} />
      </Link>
      <p className="book-name">{book.name}</p>
      <p className="book-price">{book.price} KWD</p>
      <DeleteButton bookId={book.id} deleteBook={props.deleteBook} />
    </BookWrapper>
  );
};
export default BookItem;
