import React from "react";
import { Discrption, ShopImage, Title } from "../style";
import logo from "../bookstore.jpg";
const Home = () => {
  return (
    <>
      <Title>Welcome to Bookeis</Title>
      <hr />
      <Discrption>bookies is a kttkoot Bookstore.</Discrption>
      <ShopImage alt="BookShop" src={logo} />
    </>
  );
};

export default Home;
