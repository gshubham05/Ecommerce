import React, { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = "$";
    const deliveryFee = 10;
    const [cartItem, setCartItem] = useState({});

    const addToCart = (itermId, size) => {
        if (!size) {
            toast.error("Select Product Size")
            return;
        }
        let cartData = structuredClone(cartItem)
        if (cartData[itermId]) {
            if (cartData[itermId][size]) {
                cartData[itermId][size] += 1;
            } else {
                cartData[itermId][size] = 1;
            }
        } else {
            cartData[itermId] = {};
            cartData[itermId][size] = 1
        }
        setCartItem(cartData)
    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItem) {
            for (item in cartItem[items]) {
                try {
                    if (cartItem[items][item > 0]) {
                        totalCount += cartItem[items][item]
                    }
                } catch (error) { }
            }
        }
        return totalCount;
    }

    useEffect(() => {
        console.log((cartItem));

    }, [cartItem])

    const value = {
        products,
        currency,
        deliveryFee,
        cartItem, addToCart, getCartCount
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
