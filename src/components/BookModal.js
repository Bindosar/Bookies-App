import React from "react";
import Modal from "react-modal";
import bookStore from "../stores/BookStore";
import { useState } from "react";
import { CreateButtonStyled } from "../style";
function BookModal({ isOpen, closeModal, oldBook }) {
  const [book, setBook] = useState(
    oldBook ?? {
      name: "",
      price: 0,
      description: "",
      image: "",
    }
  );
  const handleDelete = (event) => {
    event.preventDefault();
    bookStore.deleteBook(bookStore.bookId);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    bookStore[oldBook ? "updatedBook" : "createBook"](book);
    closeModal();
  };

  const handleChange = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      s
      contentLabel="Add a new book !"
    >
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={book.name}
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label>Price</label>
            <input
              name="price"
              type="number"
              value={book.price}
              min="1"
              className="form-control"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            name="description"
            type="text"
            value={book.description}
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            name="image"
            type="text"
            value={book.image}
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <CreateButtonStyled className="btn float-right" type="submit">
          {oldBook ? "Update" : "Create"}
        </CreateButtonStyled>
      </form>
    </Modal>
  );
}

export default BookModal;
