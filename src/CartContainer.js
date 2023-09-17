import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { useGlobalContext } from "./context";

const CartContainer = () => {
  const { clearCart, sumPrice, totalPrice, cartItems, isHamburgerMenuOpen } =
    useGlobalContext();
  useEffect(() => {
    totalPrice();
  }, [cartItems]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const checkWindowSize = () => {
    setWindowWidth(window.innerWidth);
    return window.removeEventListener("resize", checkWindowSize);
  };
  window.addEventListener("resize", checkWindowSize);

  return (
    <section
      className={`${
        isHamburgerMenuOpen
          ? windowWidth >= 600
            ? "cart"
            : "cart display-none"
          : "cart"
      }`}
    >
      {/* cart header */}
      <header>
        <h2>Shopping Cart</h2>
        <div className="line-border"></div>
      </header>
      {/* cart items */}
      <div>
        <p className="quantity-top">Quantity:</p>
        <CartItem />
      </div>
      {/* cart footer */}
      <footer>
        <div className="line-border"></div>
        <div className="total-price">
          <h4>Total price:</h4>
          <p>${sumPrice}</p>
        </div>
        <button className="btn-clear" onClick={() => clearCart()}>
          Clear Cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
