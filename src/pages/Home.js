import React from "react";
import { useGlobalContext } from "../context";

const Home = () => {
  const { mobilesData, addItemToCart } = useGlobalContext();
  return (
    <main className="home-page-container">
      <div className="header-of-homepage">
        <h3>Mobile phones</h3>
        <p>
          <span className="number-of-devices">{mobilesData.length}</span>{" "}
          devices found
        </p>
      </div>
      <input
        type="text"
        placeholder="Search model"
        className="search-input"
      ></input>
      <div className="phones-container">
        {mobilesData.map((cartItem) => {
          let { id, title, price, img } = cartItem;
          return (
            <div key={id} className="single-phone">
              <img src={img} alt={title} />
              <div className="description">
                <p>{title}</p>
                <p>${price}</p>
                <button
                  className="btn-add-to-cart"
                  onClick={() => addItemToCart(id)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Home;
