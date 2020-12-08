import { useParams } from "react-router";
import AddButton from "../buttons/AddButton";
import bookStore from "../stores/BookStore";
import maktabaStore from "../stores/MaktabaStore";
import BookList from "./BookList";

const MaktabaDetail = () => {
  const books = maktaba.books.map((books) => bookStore.getBookById(book.id));
  const { maktabaSlug } = useParams();
  const maktaba = maktabaStore.maktabas.find(
    (_maktaba) => _maktaba.slug === maktabaSlug
  );

  return (
    <div className="row">
      <div className="container">
        <DetailWrapper>
          <h4>{maktaba.name}</h4>
          <img src={maktaba.image} />
        </DetailWrapper>
      </div>
      <div clasName="col-12">
        <BookList books={books} />
        <AddButton maktaba={maktaba} />
      </div>
    </div>
  );
};
export default MaktabaDetail;
