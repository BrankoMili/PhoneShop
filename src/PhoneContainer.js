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
          <Link to={`/phones/${id}`}>
            <div key={id} className="single-phone">
              <img src={img} alt={title} />
              <div className="description">
                <p>{title}</p>
                <p>${price}</p>
                <Link to={``}>
                  <button
                    className="btn-add-to-cart"
                    onClick={() => addItemToCart(id, 1)}
                  >
                    Add to Cart
                  </button>
                </Link>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default PhoneContainer;
