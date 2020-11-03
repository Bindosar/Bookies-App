import logo from "./bookstore.jpg";
import {
  style,
  Title,
  ProductWrapper,
  GlobalStyle,
  Discrption,
  ShopImage,
} from "./style";
import React from "react";
import BookList from "./components/BookList";
import styled, { ThemeProvider } from "styled-components";

const theme = {
  mainColor: "#13293D",
  backGroundColor: "#000",
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <ProductWrapper>
        <GlobalStyle />
        <Title>Welcome to Bookeis</Title>
        <hr />
        <Discrption>bookies is a kttkoot Bookstore.</Discrption>
        <ShopImage src={logo} alt="logo" />
      </ProductWrapper>
      <BookList />
    </ThemeProvider>
  );
}

export default App;
