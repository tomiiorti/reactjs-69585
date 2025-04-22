import { useState } from "react";
import { CartContext } from "./CartContext";

export default function CartProvider({ children}) {
  const [cart, setCart] = useState([])

  const addProduct = (product) => setCart([...cart, product])

  const getProductsQuantity = () => {
    const quantity = cart.map(prod => prod.count).reduce((acc, curr) => acc + curr, 0);
    return quantity
  }

  return (
    <CartContext.Provider value={{ addProduct, getProductsQuantity}}>
        {children}
    </CartContext.Provider>
  )
}
