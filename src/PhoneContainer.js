import React from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";

const PhoneContainer = () => {
  const { addItemToCart, filteredArray } = useGlobalContext();

  return (
    <>
      {filteredArray.map((cartItem) => {
        let { id, title, price, img } = cartItem;
        return (
          <div key={id}>
            <Link to={`/phones/${id}`}>
              <div className="single-phone">
                <img src={img} alt={title} />
                <div className="description">
                  <p>{title}</p>
                  <p>${price}</p>
                  <button
                    className="btn-add-to-cart"
                    onClick={(e) => {
                      addItemToCart(id, 1);
                      // Prevent to go to the phone url when click on add to cart button
                      e.preventDefault();
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default PhoneContainer;
