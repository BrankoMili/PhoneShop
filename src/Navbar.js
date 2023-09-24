import React, { useEffect } from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";

const Navbar = () => {
  const {
    totalQuantity,
    cartItems,
    totalItems,
    toggleHamburgerMenu,
    isHamburgerMenuOpen,
  } = useGlobalContext();
  useEffect(() => {
    totalQuantity();
  }, [cartItems]);

  return (
    <>
      <nav>
        <div className="nav-center">
          <Link to="/">
            <h3 className="nav-title">Phone Shop</h3>
          </Link>
          <div className="nav-pages">
            <Link to="/">
              <h4>Home</h4>
            </Link>
            <Link to="/contact">
              <h4>Contact Us</h4>
            </Link>
            <Link to="/about">
              <h4>About us</h4>
            </Link>
          </div>

          <div className="nav-container">
            <div className="hamburger-icon" onClick={toggleHamburgerMenu}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <Link to="/shoppingcart">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />
                </svg>
                <p className="item-amount">{totalItems}</p>
              </div>
            </Link>
          </div>
        </div>
      </nav>
      <div
        className={`${isHamburgerMenuOpen ? "hamburger-menu" : "display-none"}`}
      >
        <Link to="/">
          <h4>Home</h4>
        </Link>
        <Link to="/contact">
          <h4>Contact Us</h4>
        </Link>
        <Link to="/about">
          <h4>About us</h4>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
