import { action, makeObservable, observable } from "mobx";
import axios from "axios";
class BookStore {
  books = [];
  constructor() {
    makeObservable(this, {
      books: observable,
      createBook: action,
      deleteBook: action,
      updateBook: action,
      fetchBooks: action,
    });
  }
  fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:8000/books");
      this.books = response.data;
    } catch (error) {
      console.log("error lien : 16");
    }
  };

  createBook = async (newBook) => {
    try {
      const res = await axios.post("http://localhost:8000/books", newBook);
      this.books.push(res.data);
    } catch (error) {}
  };

  deleteBook = async (bookId) => {
    try {
      await axios.delete(`http://localhost:8000/books/${bookId}`);
      this.books = this.books.filter((book) => book.id !== bookId);
    } catch (error) {}
  };

  updateBook = async (updatedBook) => {
    try {
      await axios.put(
        `http://localhost:8000/books/${updatedBook.id}`,
        updatedBook
      );
      const book = this.book.find((book) => book.id === updatedBook.id);
      for (const key in book) book[key] = updatedBook[key];
    } catch (error) {
      console.log("BookStore -> updateBook -> error", error);
    }
  };
}

const bookStore = new BookStore();
bookStore.fetchBooks();

export default bookStore;
