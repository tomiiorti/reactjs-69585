import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from 'react-router';
import { useCart } from '../../context/useCart';
import { serverTimestamp } from 'firebase/firestore';
import { createOrder } from '../../firebase/db';
import CheckoutForm from './CheckoutForm';

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form[0].value;
    const name = form[1].value;
    const phone = form[2].value;

    const order = {
      items: cart,
      user: {
        name,
        email,
        phone
      },
      date: serverTimestamp()
    };

    const orderId = await createOrder(order);

    if (orderId) {
      withReactContent(Swal).fire({
        title: `¡Compra exitosa! El ID de tu orden es: ${orderId}`
      });
      clearCart();
      navigate('/');
    } else {
      withReactContent(Swal).fire({
        title: `No se pudo completar la compra`
      });
    }
  };

  return <CheckoutForm handleSubmit={handleSubmit} />;
}
