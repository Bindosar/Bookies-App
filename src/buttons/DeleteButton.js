import React from "react";
import { DeleteMe } from "../style";
import bookStore from "../stores/BookStore";
function DeleteButton(props) {
  const handleDelete = () => {
    bookStore.deleteBook(props.bookId);
  };
  return <DeleteMe onClick={handleDelete}>Delete</DeleteMe>;
}

export default DeleteButton;
