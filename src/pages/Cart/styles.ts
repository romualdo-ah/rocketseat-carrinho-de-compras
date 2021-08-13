import styled from "styled-components";
import { darken, lighten } from "polished";

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;

  footer {
    padding: 10px;
    background:#fff;
    border-radius: 6px;

    position:sticky;
    bottom:0;
    margin: 30px auto auto auto;
    display: flex;
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
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, "#7159c1")};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width:100%;
  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
    align-self: flex-end;
    text-align: right;
  }

  tbody tr{
    padding-bottom:12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
    padding-bottom:50px;
    span{
      color:#9c9c9c;
      padding-top:5px;
    }

    .control {
      display: flex;
      justify-content: space-between;
      padding: 0;

      /* padding-top:50px; */

      button:last-child {
        padding-right:0px;
      }
    }
  }

  tbody td:first-child {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
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
      width: 50px;
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
