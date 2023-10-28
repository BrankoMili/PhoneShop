import React, { useContext, useEffect, useReducer } from "react";
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
  ADD_ITEM_TO_CART,
  SEARCH_INPUT_VALUE,
  SORT_BY,
  FETCH_DATA,
  IS_LOADING,
} from "./constants";

const url =
  "https://raw.githubusercontent.com/BrankoMili/Shoppingcart/main/src/mobileData.json";

const AppContext = React.createContext();

const defaultState = {
  cartItems: [],
  mobilesData: [],
  filteredArray: [],
  sumPrice: 0,
  totalItems: 0,
  isHamburgerMenuOpen: false,
  isLoading: true,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  // HOMEPAGE FUNCTIONS
  // FETCH DATA FROM URL
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const dataMobiles = await response.json();
      dispatch({ type: FETCH_DATA, payload: dataMobiles });
      // DISABLE LOADING ANIMATION
      dispatch({ type: IS_LOADING });
    } catch (error) {
      console.log(error);
      // DISABLE LOADING ANIMATION
      dispatch({ type: IS_LOADING });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // HOMEPAGE / SINGLE PHONE PAGE FUNCTIONS
  const addItemToCart = (id, quantity) => {
    dispatch({ type: ADD_ITEM_TO_CART, payload: { id, quantity } });
  };

  // HOMEPAGE FUNCTIONS

  const searchPhone = (value) => {
    dispatch({ type: SEARCH_INPUT_VALUE, payload: value });
  };

  const sortBy = (value) => {
    dispatch({ type: SORT_BY, payload: value });
  };

  // SHOPPING CART FUNCTIONS
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

  // NAVBAR FUNCTION
  const totalQuantity = () => {
    dispatch({ type: SUM_ITEMS });
  };

  // GLOBAL FUNCTION
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
        addItemToCart,
        searchPhone,
        sortBy,
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
