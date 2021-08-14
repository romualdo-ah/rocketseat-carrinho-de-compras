import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: sticky;
  padding: 10px 10px 20px 0;

  top: 0;
  background: #151319;
  z-index: 1;
  a {
    transition: opacity 0.2s;
    display: flex;
    align-items: center;
    flex-direction: row;

    .cart {
      width: 0;
      padding-right: 18px;
      span {
        font-size: 12px;
        color: #fff;
        background-color: #7159c1;
        position: relative;
        border-radius: 40px;
        padding: 3px 8px;
        width: 8px;
        right: -16px;
        top: 12px;
      }
    }
    &:hover {
      opacity: 0.7;
    }
  }
  img {
    max-width: 100%;
  }
`;

export const Cart = styled(Link)`
  display: flex;
  margin-left: auto;
  align-items: center;
  text-decoration: none;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }
  }
`;
