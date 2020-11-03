import React from "react";
import { BookWrapper } from "../style";
const BookItem = (props) => {
  return (
    <BookWrapper>
      <img src={props.book.image} />
      <p>{props.book.name}</p>
      <p>{props.book.price}</p>
    </BookWrapper>
  );
};
export default BookItem;
