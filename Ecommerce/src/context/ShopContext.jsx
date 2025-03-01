import React, { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const deliveryFee = 10;
  const [cartItem, setCartItem] = useState({});
  const navigte = useNavigate();
  const addToCart = (itermId, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }
    let cartData = structuredClone(cartItem);
    if (cartData[itermId]) {
      if (cartData[itermId][size]) {
        cartData[itermId][size] += 1;
      } else {
        cartData[itermId][size] = 1;
      }
    } else {
      cartData[itermId] = {};
      cartData[itermId][size] = 1;
    }
    setCartItem(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;

    for (const itemId in cartItem) {
      console.log("ItemId ", itemId);
      for (const size in cartItem[itemId]) {
        console.log("size ", size);
        try {
          if (cartItem[itemId][size] > 0) {
            console.log("totalCount ", totalCount);
            totalCount += cartItem[itemId][size];
            console.log("totalCount after ", totalCount);
            console.log("------------");
          }
        } catch (error) {}
      }
    }

    return totalCount;
  };

  const updateQuantity = async (itemId, size, quantity) => {
    let cardData = structuredClone(cartItem);

    cardData[itemId][size] = quantity;
    setCartItem(cardData);
  };

  const getCartTotal = () => {
    let totalAmount = 0;
    for (const itemId in cartItem) {
      const itemInfo = products.find((product) => product._id === itemId);
      if (!itemInfo) continue; // Skip if product not found

      for (const size in cartItem[itemId]) {
        try {
          if (cartItem[itemId][size] > 0) {
            totalAmount += itemInfo.price * cartItem[itemId][size];
          }
        } catch (error) {
          console.error("Error calculating cart total:", error);
        }
      }
    }
    return totalAmount;
  };

  useEffect(() => {
    console.log(cartItem);
    getCartCount();
  }, [cartItem]);

  const value = {
    products,
    currency,
    deliveryFee,
    cartItem,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartTotal,
    navigte
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
