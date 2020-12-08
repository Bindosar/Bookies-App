import { action, makeObservable, observable } from "mobx";
import instance from "./instance";
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
      const response = await instance.get("/books");
      this.books = response.data;
    } catch (error) {
      console.log("error line : 16");
    }
  };

  createBook = async (newBook, maktaba) => {
    try {
      const res = await instance.post(`/${maktaba.id}/books`, formData);
      cd;
      this.books.push(res.data);
    } catch (error) {}
  };

  deleteBook = async (bookId) => {
    try {
      await instance.delete(`/books/${bookId}`);
      this.books = this.books.filter((book) => book.id !== bookId);
    } catch (error) {}
  };

  updateBook = async (updatedBook) => {
    try {
      await instance.put(`/books/${updatedBook.id}`, updatedBook);
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
