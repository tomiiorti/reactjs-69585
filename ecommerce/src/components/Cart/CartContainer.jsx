import { useCart } from "../../context/useCart";
import { Link } from "react-router";
import { Button, Card, Container, Row, Col, ListGroup, Badge } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import CartItem from './CartItem';

export default function CartContainer() {
  const { cart, removeProduct, clearCart } = useCart();

  const total = cart.reduce((acc, prod) => acc + (prod.price * prod.count), 0);

  if (cart.length === 0) {
    return (
      <Container className="mt-5 text-center">
        <Card className="p-5">
          <h2>Tu carrito está vacío</h2>
          <p className="text-muted mb-4">¡Agrega productos para comenzar a comprar!</p>
          <Link to="/">
            <Button variant="primary">Ver productos</Button>
          </Link>
        </Card>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Row>
        <Col md={8}>
          <Card className="mb-4">
            <Card.Header as="h5">Productos en tu carrito</Card.Header>
            <ListGroup variant="flush">
              {cart.map((prod) => (
                <CartItem key={prod.id} prod={prod} removeProduct={removeProduct} />
              ))}
            </ListGroup>
          </Card>
          
          <div className="d-flex justify-content-end mb-4">
            <Button variant="outline-danger" onClick={clearCart}>
              Vaciar carrito
            </Button>
          </div>
        </Col>

        <Col md={4}>
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
        </Col>
      </Row>
    </Container>
  );
}