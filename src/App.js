import logo from "./bookstore.jpg";
import items from "./items";
import style from "./style";
function App() {
  const bookList = items.map((book) => <p>{items.name}</p>);
  return (
    <div>
      <div>
        <h1 style={style.text}>Welcome to Bookeis</h1>
        <hr />
        <h3 style={style.text}>bookies is a kttkoot Bookstore.</h3>
        <img src={logo} alt="logo" width="500px" style={style.shopImage} />
      </div>
      <div style={style.booksContainer}>
        {items.map((item) => (
          <div>
            <img
              style={style.books}
              src="https://pbs.twimg.com/media/EfE6a7RWoAEJSD5?format=jpg&name=large"
              alt="A book"
            />
            <h3 style={style.text}>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
