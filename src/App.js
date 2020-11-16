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
import BookDetail from "./components/BookDetail";
import books from "./books";
function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [book, setBook] = useState(null);
  const [_books, setbooks] = useState(books);

  const deleteBook = (bookId) => {
    const updatedBooks = _books.filter((book) => book.id !== bookId);
    setbooks(updatedBooks);
  };
  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };
  const setView = () => {
    if (book)
      return (
        <BookDetail book={book} deleteBook={deleteBook} setBook={setBook} />
      );
    return (
      <BookList books={_books} deleteBook={deleteBook} setBook={setBook} />
    );
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
      {setView()}
    </ThemeProvider>
  );
}

export default App;
