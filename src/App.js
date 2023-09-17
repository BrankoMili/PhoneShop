import React from "react";
import { useGlobalContext } from "./context";

// components
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
// items

function App() {
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
