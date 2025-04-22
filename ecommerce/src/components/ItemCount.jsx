import { useState } from 'react';

export default function ItemCount() {
    const [count, setCount] = useState(0);
    const handleSub = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    const handleAdd = () => {
        setCount(count + 1);
    }

    const handleAddCart = () => {
        alert(`Se han agregado ${count} productos al carrito`);
    }

  return (
    <div>
        <p>{count}</p>
        <button onClick={handleSub}> - </button>
        <button onClick={handleAdd}> + </button>
        <button onClick={handleAddCart}>Agregar al carrito</button>
    </div>
  )
}
