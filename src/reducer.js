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
} from "./constants";

export const reducer = (state, action) => {
  if (action.type === ADD_ITEM_TO_CART) {
    const newItem = state.mobilesData.find(
      (item) => item.id === action.payload
    );

    const isIncludes = state.cartItems.find((item) => {
      return item.id === newItem.id;
    });

    if (isIncludes) {
      let array = state.cartItems.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      return {
        ...state,
        cartItems: array,
      };
    } else {
      return {
        ...state,
        cartItems: [...state.cartItems, { ...newItem, amount: 1 }],
      };
    }
  }

  if (action.type === REMOVE) {
    return {
      ...state,
      cartItems: state.cartItems.filter((item) => item.id !== action.payload),
    };
  }

  if (action.type === CLEARCART) {
    return {
      ...state,
      cartItems: [],
    };
  }

  if (action.type === INCREASE) {
    let array = state.cartItems.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount === "" ? 1 : item.amount + 1 };
      }
      return item;
    });

    return {
      ...state,
      cartItems: array,
    };
  }

  if (action.type === DECREASE) {
    let isAmountOne = "";
    state.cartItems.map((item) => {
      if (action.payload === item.id) {
        if (item.amount === 1) {
          isAmountOne = true;
        } else {
          isAmountOne = false;
        }
      }
      return item;
    });

    if (isAmountOne) {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    } else {
      let array = state.cartItems.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount === "" ? 1 : item.amount - 1 };
        }
        return item;
      });
      return {
        ...state,
        cartItems: array,
      };
    }
  }

  if (action.type === CHANGE_ITEM_QUANTITY) {
    let array = state.cartItems.map((item) => {
      if (item.id === action.payload.id) {
        return { ...item, amount: action.payload.quantity };
      }
      return item;
    });

    return {
      ...state,
      cartItems: array,
    };
  }

  if (action.type === SUM_PRICE) {
    let updatedPrice = 0;
    state.cartItems.map((item) => {
      if (item.amount === "") {
        return (updatedPrice += 0);
      } else {
        return (updatedPrice += item.price * item.amount);
      }
    });
    return {
      ...state,
      sumPrice: updatedPrice.toFixed(2),
    };
  }

  if (action.type === SUM_ITEMS) {
    let updatedSumOfItems = 0;
    state.cartItems.map((item) => {
      if (item.amount === "") {
        return (updatedSumOfItems += 0);
      } else {
        return (updatedSumOfItems += item.amount);
      }
    });
    return {
      ...state,
      totalItems: updatedSumOfItems,
    };
  }

  if (action.type === TOGGLE_HAMBURGER_MENU) {
    let updatedHamburgerMenu = !state.isHamburgerMenuOpen;

    return {
      ...state,
      isHamburgerMenuOpen: updatedHamburgerMenu,
    };
  }
};
