import { useState } from "react";
import { CartContext } from "./CartContext";

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addProduct = (newProduct) => {
    setCart(prevCart => {
      // Busca si el producto ya existe en el carrito
      const existingProductIndex = prevCart.findIndex(
        item => item.id === newProduct.id
      );

      if (existingProductIndex >= 0) {
        // Si existe, actualiza la cantidad
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex] = {
          ...updatedCart[existingProductIndex],
          count: updatedCart[existingProductIndex].count + newProduct.count
        };
        return updatedCart;
      } else {
        // Si no existe, agrega el nuevo producto
        return [...prevCart, newProduct];
      }
    });
  };

  const removeProduct = (itemId) => {
    setCart(prevCart => prevCart.filter(prod => prod.id !== itemId));
  };

  const getProductsQuantity = () => {
    const quantity = cart.map(prod => prod.count).reduce((acc, curr) => acc + curr, 0);
    return quantity
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((acc, prod) => acc + prod.count, 0);

  const cartTotal = cart.reduce((acc, prod) => acc + (prod.price * prod.count), 0);

  return (
    <CartContext.Provider value={{ addProduct, getProductsQuantity, cart, clearCart, removeProduct, cartCount, cartTotal }}>
      {children}
    </CartContext.Provider>
  )
}
