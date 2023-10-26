import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Error = () => {
  const { isHamburgerMenuOpen } = useGlobalContext();
  return (
    // don't display the page if humburger menu is open
    <section
      className={
        isHamburgerMenuOpen ? "error-section display-none" : "error-section"
      }
    >
      <div className="error-container">
        <h4>This page doesn’t seem to exist</h4>
        <Link to="/">
          <button>Back to home page</button>
        </Link>
      </div>
    </section>
  );
};

export default Error;
