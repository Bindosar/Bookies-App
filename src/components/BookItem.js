import React from "react";
import { BookWrapper } from "../style";
const BookItem = (props) => {
  return (
    <BookWrapper>
      <img src={props.book.image} />
      <p>{props.book.name}</p>
      <p className="book-price">{props.book.price}KD</p>
    </BookWrapper>
  );
};
export default BookItem;
