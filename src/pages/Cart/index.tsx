import React from "react";
import {
  MdDelete,
  MdAddCircleOutline,
  MdRemoveCircleOutline,
} from "react-icons/md";

import { useCart } from "../../hooks/useCart";
import { formatPrice } from "../../util/format";
import { Container, ProductTable, Total } from "./styles";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  amount: number;
}

const Cart = (): JSX.Element => {
  const { cart, removeProduct, updateProductAmount } = useCart();

  const cartFormatted = cart.map((product) => {
    return { ...product, priceFormatted: formatPrice(product.price) };
  });

  const total = formatPrice(
    cart.reduce((sumTotal, product) => {
      sumTotal += product.price * product.amount;
      return sumTotal;
    }, 0)
  );

  function handleProductIncrement(product: Product) {
    updateProductAmount({ productId: product.id, amount: product.amount + 1 });
  }

  function handleProductDecrement(product: Product) {
    updateProductAmount({ productId: product.id, amount: product.amount - 1 });
  }

  function handleRemoveProduct(productId: number) {
    removeProduct(productId);
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            {/* <th aria-label="product image">PRODUTO</th> */}
            {/* <th>PRODUTO</th>
            <th>QTD</th> */}
            {/* <th>SUBTOTAL</th> */}
          </tr>
        </thead>
        <tbody>
          {cartFormatted.map((product) => (
            <tr key={product.id} data-testid="product">
              <td>
                <img loading="lazy" src={product.image} alt={product.title} />
                <div>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
                </div>
                
              </td>

              <td>
                <div className="control">
                <div>
                    <button
                      type="button"
                      data-testid="decrement-product"
                      disabled={product.amount <= 1}
                      onClick={() => handleProductDecrement(product)}
                    >
                      <MdRemoveCircleOutline size={20} />
                    </button>
                    <input
                      type="text"
                      data-testid="product-amount"
                      readOnly
                      value={product.amount}
                    />
                    <button
                      type="button"
                      data-testid="increment-product"
                      onClick={() => handleProductIncrement(product)}
                    >
                      <MdAddCircleOutline size={20} />
                    </button>
                  </div>
                  <div>

                <strong>{formatPrice(product.price * product.amount)}</strong>
                  <button
                    type="button"
                    data-testid="remove-product"
                    onClick={() => handleRemoveProduct(product.id)}
                    >
                    <MdDelete size={20} />
                  </button>
                    </div>
                </div>

              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
};

export default Cart;
