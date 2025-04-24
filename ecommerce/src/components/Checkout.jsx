import Swal from 'sweetalert2';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import withReactContent from 'sweetalert2-react-content'
import { useNavigate } from 'react-router';
import { useCart } from '../context/useCart';
import { serverTimestamp } from 'firebase/firestore';
import { createOrder } from '../firebase/db';
import { clearCart } from '../context/useCart';


export default function Checkout() {
    const { cart, clearCart } = useCart()
    const navigate = useNavigate()
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form[0].value;
        const name = form[1].value;
        const phone = form[2].value;

        const order = {
            items: cart,
            user: {
                name: name,
                email: email,
                phone: phone
            },
            date: serverTimestamp()
        }

        const orderId = await createOrder(order);

        if (orderId) {
            withReactContent(Swal).fire({
                tittle: `Compro con exito! El id de su orden es: ${orderId}`
            })
            clearCart()
            navigate('/')
        } else {
            withReactContent(Swal).fire({
                tittle: `No se pudo`
            })
        }

    }
    return (
        <div className='d-flex justify-content-center mt-5'>
            <Form className='w-50' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" defaultValue='tomasorti@gmail.com' />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control defaultValue='Tomas Orti' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                </Form.Group>

                <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control defaultValue='+541132451262' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                </Form.Group>
                <Button variant="primary" type="submit">
                    Comprar
                </Button>
            </Form>
        </div>
    );
}
