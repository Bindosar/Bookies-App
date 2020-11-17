import React, { useState } from "react";
import BookModal from "../components/BookModal";
import { BsPlusCircle } from "react-icons/bs";

function AddButton() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <BsPlusCircle className="float-right" size="2em" onClick={openModal} />
      <BookModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
}

export default AddButton;
