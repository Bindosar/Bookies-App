import { action, makeObservable, observable } from "mobx";
import instance from "./instance";
class MaktabaStore {
  maktabas = [];
  constructor() {
    makeObservable(this, {
      maktabas: observable,
      fetchMaktabas: action,
    });
  }
  fetchMaktabas = async () => {
    try {
      const response = await instance.get("/maktabas");
      this.maktabas = response.data;
    } catch (error) {
      console.log("error line : 16");
    }
  };
}

getBookById = (bookId) => this.books.find((book) => book.id === bookId);

const maktabaStore = new MaktabaStore();
maktabaStore.fetchMaktabas();

export default maktabaStore;
