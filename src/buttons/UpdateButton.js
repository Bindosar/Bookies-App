import React, { useState } from "react";
import BookModal from "../components/BookModal";
import book from "../books";
//STYLES
import { UpdateButtonStyled } from "../style";

const UpdateButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);
  return (
    <>
      <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>
      <BookModal isOpen={isOpen} closeModal={closeModal} oldBook={book} />
    </>
  );
};
export default UpdateButton;
