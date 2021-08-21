import styled from "styled-components";
import { darken, lighten } from "polished";

export const Container = styled.div`
  padding: 15px;
  padding-top:40px;
  background: #fff;
  border-radius: 4px;
  min-height: 80vh;
  /* height: 100vh; */
  animation: slideInUp 0.5s ease-out;
  display:flex;
  flex-direction: column;
  justify-content: space-between;

  footer {
    padding: 10px;
    background: #fff;
    border-radius: 6px;
    box-shadow:0px -4px 13px -10px #000000;
    bottom: 6px;
    display: flex;
    position:sticky;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap-reverse;

    div {
      flex-grow: 1;
      justify-content: flex-end;
    }

    button {
      flex-grow: 1;
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;

      &:hover {
        background: ${darken(0.06, "#7159c1")};
      }
    }
  }


  @keyframes slideInUp {
    0% {
      transform: translateY(3%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }}
`;

export const ProductTable = styled.table`
  width: 100%;
  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
    align-self: flex-end;
    text-align: right;
  }

  tbody tr {
    padding-bottom: 12px;
    display: flex;
    flex-direction: column;
  }
  tbody td:first-child {
    padding: 0;
    display: flex;
  }

  tbody td:first-child div {
    display: block;
    flex-direction: column;
    margin-left: 10px;
  }

  tbody td {
    flex-direction: row;
    padding: 12px;
    border-bottom: 1px solid #eee;
    padding-bottom: 50px;

    &:nth-child(2) {
      padding-left: 0px;
    }

    span {
      color: #9c9c9c;
      padding-top: 5px;
    }

    .control {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 0;

      strong {
        margin-right: 10px;
      }

      button {
        padding-top: 10px;
        &:last-child {
          padding-right: 0px;
        }
      }
    }
  }

  img {
    max-height: 100px;
  }

  strong {
    color: #333;
    display: block;

    &:last-child {
      text-align: end;
    }
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 40px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;

    svg {
      color: #7159c1;
      transition: color 0.2s;
    }

    &:hover {
      svg {
        color: ${darken(0.06, "#7159c1")};
      }
    }

    &:disabled {
      svg {
        color: ${lighten(0.25, "#7159c1")};
        cursor: not-allowed;
      }
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;

export const EmptyCart = styled.div`
display: flex;
justify-content: center;
align-items: center;
min-height:50vh;
flex-direction: column;

h1{
  padding-top:50px;
}

a {
  text-decoration: none;
  position: absolute;
  bottom:4rem;
  color:#fff;
  padding: 10px 50px;
  background-color: #7159c1;
  border-radius: 6px;
}
`;
