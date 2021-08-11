import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

import logo from '../../assets/images/logo.svg';
import { Container, Cart } from './styles';
import { useCart } from '../../hooks/useCart';

const Header = (): JSX.Element => {
  const { cart } = useCart();
  const cartSize = cart.length;
  const [logoImage,setLogoImage] = useState(logo);

  useEffect(() => {
    //load logo from local storage or from assets folder
    
    let logoImage = localStorage.getItem('@RocketShoes/logoImage');
    if (!logoImage) {
      setLogoImage(logo);
      new FileReader().readAsDataURL(new Blob([logo], { type: 'image/svg+xml' }));
      //save logo to local storage
      localStorage.setItem('@RocketShoes/logoImage', logo);
    }
  }, [logoImage])


  return (
    <Container>
      <Link to="/">
        <img className="logo" loading="lazy" src={logoImage} alt="Rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span data-testid="cart-size">
            {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}
          </span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
};

export default Header;
