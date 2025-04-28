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

  const removeFromCart = courseId => {
    setCartItems(prevItems => {
      return prevItems.filter(item => item.id !== courseId);
    });
  };
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext); // Custom hook to use the CartContext
