import React from "react";
import { useGlobalContext } from "../context";

const Home = () => {
  const { cartItems } = useGlobalContext();
  return (
    <main className="home-page-container">
      <h3>Mobile phones</h3>
      <p>
        <span className="number-of-devices">5</span> devices found
      </p>
      <div className="phones-container">
        {cartItems.map((cartItem) => {
          let { id, title, price, img, amount } = cartItem;
          return (
            <div key={id} className="single-phone">
              <img src={img} alt={title} />
              <div className="description">
                <p>{title}</p>
                <p>${price}</p>
                <button>Add to Cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Home;
