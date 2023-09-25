import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <link
        rel="stylesheet"
        href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
      />
      <h3>About us</h3>
      <img
        src={require("../phone_pictures/pexels-nataliya-vaitkevich-6214476.jpg")}
        alt="desk-with-phone"
      />
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam quis
        quam. Nunc auctor. Proin pede metus, vulputate nec, fermentum fringilla,
        vehicula vitae, justo. Morbi leo mi, nonummy eget tristique non, rhoncus
        non leo. Etiam ligula pede, sagittis quis, interdum ultricies,
        scelerisque eu. Praesent vitae arcu tempor neque lacinia pretium.
        Curabitur bibendum justo non orci. Fusce dui leo, imperdiet in, aliquam
        sit amet, feugiat eu, orci. Nullam rhoncus aliquam metus. Integer
        malesuada. Nunc dapibus tortor vel mi dapibus sollicitudin. Nullam
        faucibus mi quis velit. Etiam dui sem, fermentum vitae, sagittis id,
        malesuada in, quam. Maecenas sollicitudin. Phasellus rhoncus. Donec
        iaculis gravida nulla. Morbi imperdiet, mauris ac auctor dictum, nisl
        ligula egestas nulla, et sollicitudin sem purus in lacus. Morbi leo mi,
        nonummy eget tristique non, rhoncus non leo.
      </p>
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
    </div>
  );
};

export default About;
