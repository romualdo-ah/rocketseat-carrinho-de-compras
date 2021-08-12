import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket,MdShoppingCart } from 'react-icons/md';

import logo from '../../assets/images/logo.svg';
import { Container, Cart } from './styles';
import { useCart } from '../../hooks/useCart';

const Header = (): JSX.Element => {
  const { cart } = useCart();
  const cartSize = cart.length;
  return (
    <Container>
      <Link to="/">
        <img className="logo" loading="lazy" src={logo} alt="Rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Carrinho</strong>
        </div>
          <div className="cart">
          <span data-testid="cart-size">
            
            {cartSize}
            {/* {`${cartSize} item${cartSize === 1 ? '' : 's'}`} */}
          </span>
        <MdShoppingCart size={36} color="#FFF" />
          </div>
      </Cart>
    </Container>
  );
};

export default Header;
