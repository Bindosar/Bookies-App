import React from "react";
import { DeleteMe } from "../style";
function DeleteButton(props) {
  const handleDelete = () => {
    props.deleteBook(props.bookId);
  };
  return <DeleteMe onClick={handleDelete}>Delete</DeleteMe>;
}

export default DeleteButton;
