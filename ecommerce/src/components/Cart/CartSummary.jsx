import { Card, Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const CartSummary = ({ cart, total }) => {
  return (
    <Card>
      <Card.Header as="h5">Resumen de compra</Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
          {cart.map((prod) => (
            <ListGroup.Item key={`summary-${prod.id}`} className="d-flex justify-content-between">
              <span>
                {prod.name} <small>(x{prod.count})</small>
              </span>
              <span>${(prod.price * prod.count).toFixed(2)}</span>
            </ListGroup.Item>
          ))}
          <ListGroup.Item className="fw-bold d-flex justify-content-between">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </ListGroup.Item>
        </ListGroup>

        <Link to="/checkout" className="d-grid mt-3">
          <Button variant="success" size="lg">
            Finalizar compra
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CartSummary;
