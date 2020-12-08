import { observable, makeAutoObservable } from "mobx";
import instance from "./instance";
class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }
  signup = async (userInfo) => {
    try {
      await instance.post("/signup", userInfo);
    } catch (error) {
      console.log(error);
    }
  };
}

const authStore = new AuthStore();

export default authStore;
