import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// components
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./Navbar";
import ContactUs from "./pages/ContactUs";
import CartContainer from "./pages/CartContainer";
// items

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/shoppingcart">
          <CartContainer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
