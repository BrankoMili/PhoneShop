import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="title-desc">
          <p>Mobile Shop</p>
          <desc className="footer-desc">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed
            convallis magna eu sem. Nullam lectus justo, vulputate eget mollis
            sed, tempor sed magna.
          </desc>
        </div>
        <div className="buttons">
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
      </div>
    </footer>
  );
};

export default Footer;
