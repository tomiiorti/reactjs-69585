import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Button, ButtonGroup, Badge } from 'react-bootstrap';
import { Plus, Dash, CartPlus } from 'react-bootstrap-icons';
import '../../css/ItemCount.css';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

export default function ItemCount({ product, initial = 1, max = 10 }) {
    const [count, setCount] = useState(initial);
    const { addProduct } = useContext(CartContext);

    const handleSub = () => count > 1 && setCount(count - 1);
    const handleAdd = () => count < max && setCount(count + 1);
    const handleAddCart = () => {
        addProduct({ ...product, count });
        setCount(initial);

        withReactContent(Swal).fire({
            title: `Se agregaron ${count} ${product.name} al carrito`,
            icon: 'success',
            timer: 1500
        });
    };

    return (
        <div className="item-count-container">
            <div className="d-flex align-items-center mb-3">
                <ButtonGroup aria-label="Contador">
                    <Button 
                        variant="outline-secondary" 
                        onClick={handleSub}
                        disabled={count <= 1}
                    >
                        <Dash size={20} />
                    </Button>
                    
                    <Button variant="light" className="count-display">
                        <Badge bg="secondary" pill>{count}</Badge>
                    </Button>
                    
                    <Button 
                        variant="outline-secondary" 
                        onClick={handleAdd}
                        disabled={count >= max}
                    >
                        <Plus size={20} />
                    </Button>
                </ButtonGroup>
                
                <span className="ms-3 text-muted small">
                    Máx. {max} por cliente
                </span>
            </div>
            
            <Button 
                variant="primary" 
                onClick={handleAddCart}
                disabled={count < 1 || count > max}
                className="w-100 add-to-cart-btn"
            >
                <CartPlus className="me-2" size={18} />
                Agregar al carrito
            </Button>
        </div>
    );
}