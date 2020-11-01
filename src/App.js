import logo from "./bookstore.jpg";
const style = {
  text: { textAlign: "center" },
  shopImage: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%",
  },
};
function App() {
  return (
    <div>
      <h1 style={style.text}>Welcome to Bookeis</h1>
      <hr />
      <h3 style={style.text}>bookies is a kttkoot Bookstore.</h3>
      <img src={logo} rel="logo" width="500px" style={style.shopImage} />
      <br />
      <br />
      {/* <img src="./src/alghanim.png" /> */}
    </div>
  );
}

export default App;
