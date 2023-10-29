import React from "react";
import { useGlobalContext } from "../context";

const ContactUs = () => {
  const { isHamburgerMenuOpen } = useGlobalContext();

  return (
    // don't display the page if humburger menu is open
    <div
      className={`${
        isHamburgerMenuOpen
          ? "contact-us-container display-none"
          : "contact-us-container"
      }`}
    >
      <h3>Contact Us</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
        sint.
      </p>
      <div className="contact-details">
        <i className="uil uil-phone-times"></i>
        <span>+381655545656</span>
        <div></div>
        <i className="uil uil-envelope"></i>
        <span>example@example.com</span>
      </div>
      <div className="form-container">
        <form action="https://formspree.io/f/mleypkvj" method="POST">
          <input type="text" name="first_name" placeholder="First name" />

          <input type="text" name="last_name" placeholder="Last name" />

          <input type="email" name="email" placeholder="email address" />

          <textarea name="message" placeholder="your message"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
