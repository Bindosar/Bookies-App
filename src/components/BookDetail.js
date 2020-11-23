import React from "react";
import { DetailWrapper } from "../style";
import DeleteButton from "../buttons/DeleteButton";
import { Redirect, useParams } from "react-router-dom";
import bookStore from "../stores/BookStore";
import { observer } from "mobx-react";
function BookDetail() {
  const { bookId } = useParams();
  const book = bookStore.books.find((book) => book.id === +bookId);
  if (!book) return <Redirect to="books" />;
  return (
    <DetailWrapper>
      <h1>{bookStore.book.name}</h1>
      <img src={bookStore.book.image} alt={bookStore.book.name} />
      <p>{bookStore.book.description}</p>
      <p>{bookStore.book.price} KD</p>
      <DeleteButton bookId={book.id} />
    </DetailWrapper>
  );
}

export default observer(BookDetail);
