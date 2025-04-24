import { useCart } from "../context/useCart"

export default function CartContainer() {
  const { cart } = useCart();

  if (cart.length === 0) {
    return <h1>El carrito está vacío</h1>
  }

  return (
    <div>
      {cart.map(prod => (
        <p key={prod.id}>
          {prod.name} x {prod.count}
        </p>
      ))}
    </div>
  )
}
