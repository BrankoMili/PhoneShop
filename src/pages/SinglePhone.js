import React from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context";

const SinglePhone = () => {
  const { mobilesData, addItemToCart } = useGlobalContext();
  const { id } = useParams();

  const currentPhone = mobilesData.find((item) => parseInt(id) === item.id);
  console.log(currentPhone);
  const { title, price, img } = currentPhone;

  return (
    <section className="single-phone-section">
      <div className="single-phone-container">
        <img src={img} alt="phone-image" />
        <div>
          <p>
            <span className="property-of-phone">Model name:</span> {title}
          </p>
          <p>
            <span className="property-of-phone">Price:</span> ${price}
          </p>
          <button
            className="btn-add-to-cart"
            onClick={() => addItemToCart(parseInt(id))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default SinglePhone;
