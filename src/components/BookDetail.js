import React from "react";
import { DetailWrapper } from "../style";
import DeleteButton from "../buttons/DeleteButton";
import { Redirect, useParams } from "react-router-dom";
import bookStore from "../stores/BookStore";
import { observer } from "mobx-react";
function BookDetail() {
  const { bookSlug } = useParams();
  const book = bookStore.books.find((book) => book.slug === bookSlug);
  if (!book) return <Redirect to="/books" />;
  return (
    <DetailWrapper>
      <h1>{book.name}</h1>
      <img src={book.image} alt={book.name} />
      <p>{book.description}</p>
      <p>{book.price} KD</p>
      <DeleteButton bookId={book.id} />
    </DetailWrapper>
  );
}

export default observer(BookDetail);
