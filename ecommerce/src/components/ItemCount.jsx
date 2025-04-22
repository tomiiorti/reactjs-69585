import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function ItemCount({ product }) {
    const [count, setCount] = useState(0);
    const { addProduct } = useContext(CartContext);

    const handleSub = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    const handleAdd = () => {
        setCount(count + 1);
    }

    const handleAddCart = () => addProduct({count, ...product});

  return (
    <div>
        <p>{count}</p>
        <button onClick={handleSub}> - </button>
        <button onClick={handleAdd}> + </button>
        <button onClick={handleAddCart}>Agregar al carrito</button>
    </div>
  )
}
