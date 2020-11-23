import React from "react";
import { DeleteMe } from "../style";
import bookStore from "../stores/BookStore";
function DeleteButton() {
  const handleDelete = () => {
    bookStore.deleteBook(bookStore.bookId);
  };
  return <DeleteMe onClick={handleDelete}>Delete</DeleteMe>;
}

export default DeleteButton;
