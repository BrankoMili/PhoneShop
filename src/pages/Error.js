import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-section">
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
