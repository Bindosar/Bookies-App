import styled, { createGlobalStyle } from "styled-components";
const style = {
  text: { textAlign: "center" },
  shopImage: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    mrginBottom: "auto",
    width: "50%",
  },
  books: {
    display: "block",
    marginLeft: "100px",
    marginRight: "50px",
    marginTop: "100px",
    marginBottom: "50px",
    width: "30%",
  },

  booksContainer: {
    display: "flex",
  },
};

const Title = styled.h1`
  text-align: center;
  color: #9ceaef;
`;

const Discrption = styled.h3`
  text-align: center;
`;
const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;
const BookWrapper = styled.div`
  margin: 20px;

  img {
    height: 200px;
  }
  p {
    text-align: center;

    &.book-price {
      color: red;
    }
  }
`;

const GlobalStyle = createGlobalStyle`
body{
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.mainColor};
}
`;

const ThemeButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

const theme = {
  light: {
    mainColor: "white",
    backgroundColor: "black",
  },
  dark: {
    mainColor: "#272D2D",
    backgroundColor: "white",
  },
};
export {
  style,
  Title,
  GlobalStyle,
  ListWrapper,
  ShopImage,
  Discrption,
  BookWrapper,
  ThemeButton,
  theme,
};
