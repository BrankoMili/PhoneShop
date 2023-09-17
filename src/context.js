import React, { useContext, useReducer } from "react";
import items from "./data";
import { reducer } from "./reducer";
import {
  CLEARCART,
  INCREASE,
  REMOVE,
  CHANGE_ITEM_QUANTITY,
  DECREASE,
  SUM_PRICE,
  SUM_ITEMS,
  TOGGLE_HAMBURGER_MENU,
} from "./constants";

const AppContext = React.createContext();

const defaultState = {
  cartItems: items,
  sumPrice: 0,
  totalItems: 0,
  isHamburgerMenuOpen: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const remove = (id) => {
    dispatch({ type: REMOVE, payload: id });
  };

  const clearCart = () => {
    dispatch({ type: CLEARCART });
  };

  const increaseItemQuantity = (id) => {
    dispatch({ type: INCREASE, payload: id });
  };

  const decreaseItemQuantity = (id) => {
    dispatch({ type: DECREASE, payload: id });
  };

  const changeQuantityValue = (id, quantity) => {
    dispatch({ type: CHANGE_ITEM_QUANTITY, payload: { id, quantity } });
  };

  const totalPrice = () => {
    dispatch({ type: SUM_PRICE });
  };

  const totalQuantity = () => {
    dispatch({ type: SUM_ITEMS });
  };

  const toggleHamburgerMenu = () => {
    dispatch({ type: TOGGLE_HAMBURGER_MENU });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        remove,
        clearCart,
        increaseItemQuantity,
        changeQuantityValue,
        decreaseItemQuantity,
        totalPrice,
        totalQuantity,
        toggleHamburgerMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
