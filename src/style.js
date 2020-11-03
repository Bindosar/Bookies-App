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
    mrginBottom: "50px",
    width: "30%",
  },

  booksContainer: {
    display: "flex",
  },
};
const Title = styled.h1`
  text-align: center;
  color: #13293d;
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
    width: 120px;
  }
  p {
    text-align: center;

    &.book-price {
      color: #255253;
    }
  }
`;

const GlobalStyle = createGlobalStyle`
body{
 color:#13293D;
 background-color:papayawhip

}
`;
const ProductWrapper = styled.div``;
export {
  style,
  Title,
  GlobalStyle,
  ListWrapper,
  ShopImage,
  Discrption,
  BookWrapper,
  ProductWrapper,
};
