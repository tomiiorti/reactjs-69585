import Button from 'react-bootstrap/Button';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

export default function CartWidget() {
    const { getProductsQuantity } = useContext(CartContext);
    const quantity = getProductsQuantity();
    return (
        <div>
            <Button variant='light'>{quantity}</Button>
        </div>
    )
}
