import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context";

const SinglePhone = () => {
  const { isLoading, isHamburgerMenuOpen } = useGlobalContext();
  return (
    <section
      // don't display the page if humburger menu is open
      className={`${
        isHamburgerMenuOpen
          ? "single-phone-section display-none"
          : "single-phone-section"
      }`}
    >
      {/* Display loading animation until data is loaded */}

      {isLoading ? (
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <SinglePhoneContainer />
      )}
    </section>
  );
};

const SinglePhoneContainer = () => {
  const { mobilesData, addItemToCart } = useGlobalContext();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const currentPhone = mobilesData.find((item) => parseInt(id) === item.id);
  const {
    title,
    price,
    img,
    Dimensions,
    Weight,
    Resolution,
    Processor,
    RAM,
    Internal_storage,
    Main_camera,
  } = currentPhone;

  return (
    <div className="single-phone-container">
      <img src={img} alt="phone" />
      <div>
        <div className="phone-spec-container">
          <span className="property-of-phone">Model name:</span>
          <p>{title}</p>
          <span className="property-of-phone">Price:</span>
          <p>${price}</p>
          <span className="property-of-phone">Dimension:</span>
          <p>{Dimensions}</p>
          <span className="property-of-phone">Weight:</span>
          <p>{Weight}</p>
          <span className="property-of-phone">Resolution:</span>
          <p>{Resolution}</p>
          <span className="property-of-phone">Processor:</span>
          <p>{Processor}</p>
          <span className="property-of-phone">RAM:</span>
          <p>{RAM}</p>
          <span className="property-of-phone">Internal storage:</span>{" "}
          <p>{Internal_storage}</p>
          <span className="property-of-phone">Main camera:</span>{" "}
          <p>{Main_camera}</p>
          <div className="button-amount-container">
            <div className="amount-container">
              <button
                className="amount-btn"
                onClick={() => setQuantity(quantity - 1)}
              >
                <div>-</div>
              </button>
              <input
                type="text"
                value={quantity}
                onChange={(e) => {
                  // if user delete value
                  if (e.target.value === "") {
                    setQuantity(0);
                    return;
                  }
                  // if user type value which is not a number
                  if (isNaN(parseInt(e.target.value))) {
                    return;
                  }
                  setQuantity(parseInt(e.target.value));
                }}
              ></input>
              <button
                className="amount-btn"
                onClick={() => setQuantity(quantity + 1)}
              >
                <div>+</div>
              </button>
            </div>
            <button
              className="add-to-cart-single-phone-btn"
              onClick={() => addItemToCart(parseInt(id), quantity)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePhone;
