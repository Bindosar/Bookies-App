import React from "react";
import style from "../style";
const BookItem = (props) => {
  return (
    <div style={style.books}>
      <img src={props.book.image} />
      <p>{props.book.name}</p>
      <p>{props.book.price}</p>
    </div>
  );
};
export default BookItem;
