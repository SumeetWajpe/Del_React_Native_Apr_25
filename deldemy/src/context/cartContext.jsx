import { createContext, use, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = newCourse => {
    setCartItems(prevItems => {
      const exists = prevItems.find(cartItem => cartItem.id === newCourse.id);
      if (exists) return prevItems;
      return [...prevItems, newCourse];
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext); // Custom hook to use the CartContext
