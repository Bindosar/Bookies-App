import styled, { createGlobalStyle } from "styled-components";
export const style = {
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

export const Title = styled.h1`
  text-align: center;
  color: #9ceaef;
`;

export const Discrption = styled.h3`
  text-align: center;
`;
export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;
export const BookWrapper = styled.div`
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

export const GlobalStyle = createGlobalStyle`
body{
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.mainColor};
}
`;

export const ThemeButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export const theme = {
  light: {
    mainColor: "white",
    backgroundColor: "black",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#272D2D",
    backgroundColor: "white",
    red: "#ff3232",
  },
};
export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;
export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  img {
    width: 40%;
    float: left;
  }

  p {
    vertical-align: middle;
  }
`;

export const DeleteMe = styled.p`
  color: ${(props) => props.theme.red};
`;
