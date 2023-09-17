import React, { useEffect } from "react";
import { useGlobalContext } from "./context";

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
          <h3 className="nav-title">Phone Shop</h3>
          <div className="nav-pages">
            <h4>Home</h4>
            <h4>Products</h4>
            <h4>About us</h4>
          </div>

          <div className="nav-container">
            <div className="hamburger-icon" onClick={toggleHamburgerMenu}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />
            </svg>
            <p className="item-amount">{totalItems}</p>
          </div>
        </div>
      </nav>
      <div
        className={`${isHamburgerMenuOpen ? "hamburger-menu" : "display-none"}`}
      >
        <h4>Home</h4>
        <h4>Products</h4>
        <h4>About us</h4>
      </div>
    </>
  );
};

export default Navbar;
