import React, { useContext } from "react";

import Title from "./Title";
import { ShopContext } from "../context/ShopContext";

function CartTotal() {
  const { getCartTotal, deliveryFee, currency } = useContext(ShopContext);
  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title t1={"CART"} t2={"TOTAL"} />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency}
            {getCartTotal()}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>
            {currency}
            {deliveryFee}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b>Total</b>
          <b>
            {currency}
            {getCartTotal() === 0 ? 0 : getCartTotal() + deliveryFee}
          </b>
        </div>
      </div>
    </div>
  );
}

export default CartTotal;
