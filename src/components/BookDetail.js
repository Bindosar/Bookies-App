import React from "react";
import { DetailWrapper } from "../style";
import DeleteButton from "../buttons/DeleteButton";
import { Link, Redirect, useParams } from "react-router-dom";
function BookDetail(props) {
  // const book = props.books[0];
  const handleDelete = (bookId) => {
    props.deleteBook(bookId);
    props.setBook();
  };
  const { bookSlug } = useParams();
  const book = props.books.find((book) => book.slug === bookSlug);
  if (!book) return <Redirect to="books" />;
  return (
    <DetailWrapper>
      <h1>{props.book.name}</h1>
      <img src={props.book.image} alt={props.book.name} />
      <p>{props.book.description}</p>
      <p>{props.book.price} KD</p>
      <DeleteButton bookId={book.id} deleteBook={handleDelete} />
    </DetailWrapper>
  );
}

export default BookDetail;
