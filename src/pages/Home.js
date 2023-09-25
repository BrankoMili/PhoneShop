import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

const Home = () => {
  const { addItemToCart, searchPhone, filteredArray, sortBy } =
    useGlobalContext();

  useEffect(() => {
    sortBy("byName");
  }, [filteredArray]);

  return (
    <main className="home-page-container">
      <link
        rel="stylesheet"
        href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
      />
      <div className="header-of-homepage">
        <h3>Mobile phones</h3>
        <p>
          <span className="number-of-devices">{filteredArray.length}</span>{" "}
          devices found
        </p>
      </div>
      <div className="searchAndSelectContainer">
        <input
          type="text"
          placeholder="Search model"
          className="search-input"
          onChange={(event) => searchPhone(event.target.value)}
        ></input>

        <select
          onChange={(e) => {
            sortBy(e.target.value);
          }}
        >
          <option value="byName">Sort by name ascending</option>
          <option value="lowToHigh">Sort by price low to high</option>
          <option value="highToLow">Sort by price high to low</option>
          <option value="popularity">Sort by popularity</option>
        </select>
      </div>

      <div className="phones-container">
        {filteredArray.map((cartItem) => {
          let { id, title, price, img } = cartItem;
          return (
            <Link to={`/phones/${id}`}>
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
            </Link>
          );
        })}
      </div>
      <div className="line-border"></div>
      <div class="social-icons">
        <p>Follow us on</p>
        <a href="/" class="facebook-icon">
          <i class="uil uil-facebook"></i>
        </a>
        <a href="/" class="instagram-icon">
          <i class="uil uil-instagram"></i>
        </a>
        <a href="/" class="youtube-icon">
          <i class="uil uil-youtube"></i>
        </a>
      </div>
    </main>
  );
};

export default Home;
