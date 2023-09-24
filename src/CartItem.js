import React from "react";
import { useGlobalContext } from "./context";

const CartItem = () => {
  const {
    cartItems,
    remove,
    increaseItemQuantity,
    changeQuantityValue,
    decreaseItemQuantity,
  } = useGlobalContext();

  return (
    <article className="cart-item">
      {cartItems.map((cartItem) => {
        let { id, title, price, img, amount } = cartItem;
        return (
          <div key={id} className="container-cart-item">
            <div className="image-text-cart-item">
              <img src={img} alt={title}></img>
              <div className="cart-item-desc">
                <h3>{title}</h3>
                <p>${price}</p>
                <button onClick={() => remove(id)}>remove</button>
              </div>
            </div>
            <div className="amount-container">
              <button
                className="amount-btn"
                onClick={() => {
                  decreaseItemQuantity(id);
                }}
              >
                <div>-</div>
              </button>
              <input
                type="text"
                value={amount}
                onChange={(e) => {
                  if (e.target.value === "") {
                    changeQuantityValue(id, e.target.value);
                    return;
                  }
                  if (isNaN(parseInt(e.target.value))) {
                    return;
                  }
                  changeQuantityValue(id, parseInt(e.target.value));
                }}
              ></input>
              <button
                className="amount-btn"
                onClick={() => increaseItemQuantity(id)}
              >
                <div>+</div>
              </button>
            </div>
          </div>
        );
      })}
    </article>
  );
};

export default CartItem;
