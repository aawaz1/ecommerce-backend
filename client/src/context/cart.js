import React, { useState, useEffect, createContext, useContext } 
from "react";



// Create a context
const CartContext = createContext();


const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    let existingCartItem = localStorage.getItem('cart')
    if(existingCartItem) setCart(JSON.parse(existingCartItem))
  },[])




  

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook
const useCart = () => useContext(CartContext);

export { useCart, CartProvider };