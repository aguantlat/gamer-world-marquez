import React from "react";
import { useState } from "react";

export const CartContext = React.createContext([]);

export default function CartProvider({ defaultValue = [], children }) {
  const [cart, setCart] = useState(defaultValue);

  const addItem = (item, quantity) => {
    if (isInCart(item?.id)) {
      const index = cart?.findIndex((i) => i?.id === item?.id);
      cart[index].quantity += quantity;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const removeItem = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const clear = () => setCart([]);

  const isInCart = (itemId) => {
    return cart?.some((item) => item?.id === itemId);
  };

  const cartQuantity = () => {
    return cart?.reduce(
      (counter, currentItem) => counter + currentItem.quantity,
      0
    );
  };

  const getTotal = () => {
    return cart?.reduce(
      (counter, currentItem) =>
        counter + currentItem.quantity * currentItem.price,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clear, isInCart, getTotal, cartQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}
