import { BookWrapper } from "../style";
import UpdateButton from "../buttons/UpdateButton";
import DeleteButton from "../buttons/DeleteButton";
import { Link } from "react-router-dom";
const BookItem = (props) => {
  const { book } = props;
  return (
    <BookWrapper className="col-lg-3 col-md-4 col-sm-6">
      <Link
        to={`/books/${book.slug}`}
        className="d-flex justify-content-center"
      >
        <img src={book.image} />
      </Link>
      <p className="book-name">{book.name}</p>
      <p className="book-price">{book.price} KWD</p>
      <UpdateButton book={book} />
      <DeleteButton bookId={book.id} deleteBook={props.deleteBook} />
    </BookWrapper>
  );
};
export default BookItem;
