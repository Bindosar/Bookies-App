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
import Home from "./components/Home";
import { Switch, Route } from "react-router";
import { Link } from "react-router-dom";
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
  <Route path="/books/:bookSlug">
    <BookDetail books={_books} deleteBook={deleteBook} />
  </Route>;
  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <div>
        <GlobalStyle />
        <Link to="/books" styles={{ margin: 10, float: "right" }}>
          Books
        </Link>
        <ThemeButton onClick={toggleTheme}>Toggle theme</ThemeButton>
        <Switch>
          <Route path="/books">
            <BookList books={_books} deleteBook={deleteBook} />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
