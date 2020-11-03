import logo from "./bookstore.jpg";
import style from "./style";
import React from "react";
import BookList from "./components/BookList";
function App() {
  return (
    <div>
      <div>
        <h1 style={style.text}>Welcome to Bookeis</h1>
        <hr />
        <h3 style={style.text}>bookies is a kttkoot Bookstore.</h3>
        <img src={logo} alt="logo" width="500px" style={style.shopImage} />
      </div>
      <BookList />
    </div>
  );
}

export default App;
