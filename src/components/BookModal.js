import React from "react";
import Modal from "react-modal";
function BookModal(props) {
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.closeModal}
      style={props.customStyles}
      contentLabel="Add a new book !"
    >
      <form>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-6">
            <label>Price</label>
            <input type="number" min="1" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input type="text" className="form-control" />
        </div>
      </form>
    </Modal>
  );
}

export default BookModal;
