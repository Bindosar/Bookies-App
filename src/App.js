import logo from "./bookstore.jpg";
import {
  style,
  Title,
  ThemeButton,
  GlobalStyle,
  Discrption,
  ShopImage,
  theme,
} from "./style";
import React, { useState } from "react";
import BookList from "./components/BookList";
import styled, { ThemeProvider } from "styled-components";

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
    // if (theme === "light") {
    //   setCurrentTheme("dark");
    // } else {
    //   setCurrentTheme("light");
    // }
  };
  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <div>
        <GlobalStyle />
        <ThemeButton onClick={toggleTheme}>Toggle theme</ThemeButton>
        <Title>Welcome to Bookeis</Title>
        <hr />
        <Discrption>bookies is a kttkoot Bookstore.</Discrption>
        <ShopImage src={logo} alt="logo" />
      </div>
      <BookList />
    </ThemeProvider>
  );
}

export default App;
