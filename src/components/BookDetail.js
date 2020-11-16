import React from "react";
import { DetailWrapper } from "../style";
import DeleteButton from "../buttons/DeleteButton";
import { useParams } from "react-router-dom";
function BookDetail(props) {
  // const book = props.books[0];
  const { bookSlug } = useParams();
  const book = props.books.find((book) => book.slug === bookId);
  return (
    <DetailWrapper>
      <h1>{props.book.name}</h1>
      <img src={props.book.image} alt={props.book.name} />
      <p>{props.book.description}</p>
      <p>{props.book.price} KD</p>
      <DeleteButton bookId={book.id} deleteBook={props.deleteBook} />
    </DetailWrapper>
  );
}

export default BookDetail;
