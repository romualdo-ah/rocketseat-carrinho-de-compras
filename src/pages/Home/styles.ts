import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(15rem, 1fr) );
  grid-gap: 1.6rem;
  list-style: none;
  animation: slideInUp .7s ease-out;
  
  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;

    img {
      align-self: center;
      max-width: 250px;
      width:100%;

      animation: loadAnimation 0.3s linear;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }
    
    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      
      display: flex;
      align-items: center;
      transition: background 0.2s;
      
      &:hover {
        background: ${darken(0.06, '#7159c1')};
      }
      
      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);
        
        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
        padding:10px;
      }
    }
  }
  @keyframes loadAnimation{
    from {opacity: 0;}
    to {opacity: 1;}
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
