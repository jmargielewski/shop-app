import React from "react";
import { Segment } from "semantic-ui-react";
import axios from "axios";
import cookie from "js-cookie";
import { parseCookies } from "nookies";

import CartItemList from "../components/Cart/CartItemList";
import CartSummary from "../components/Cart/CartSummary";
import baseUrl from "../utils/baseUrl";

function Cart({ products, user }) {
  const [cartProducts, setCartProducts] = React.useState(products);

  async function handleRemoveFromCart(productId) {
    const url = `${baseUrl}/api/cart`;
    const token = cookie.get("token");
    const payload = {
      params: { productId },
      headers: { Authorization: token }
    };

    const response = await axios.delete(url, payload);

    setCartProducts(response.data);
  }
  return (
    <Segment>
      <CartItemList
        handleRemoveFromCart={handleRemoveFromCart}
        user={user}
        products={cartProducts}
      />
      <CartSummary products={cartProducts} />
    </Segment>
  );
}

Cart.getInitialProps = async ctx => {
  const { token } = parseCookies(ctx);

  if (!token) {
    return { product: [] };
  }
  // make request only if user is authenticated
  const url = `${baseUrl}/api/cart`;
  const payload = { headers: { Authorization: token } };
  const response = await axios.get(url, payload);
  return { products: response.data };
};

export default Cart;
