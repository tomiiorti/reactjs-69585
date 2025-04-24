import { useCart } from "../../context/useCart";
import { Link } from "react-router";
import { Button, Card, Container, Row, Col, ListGroup, Badge } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";

export default function CartContainer() {
  const { cart, removeItem, clearCart } = useCart();

  // Calcular total del carrito
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
                <ListGroup.Item key={prod.id}>
                  <Row className="align-items-center">
                    <Col xs={3} md={2}>
                      <img
                        src={prod.img}
                        alt={prod.name}
                        style={{ width: "100%", maxHeight: "80px", objectFit: "contain" }}
                      />
                    </Col>
                    <Col xs={5} md={6}>
                      <h6>{prod.name}</h6>
                      <small className="text-muted">${prod.price.toFixed(2)} c/u</small>
                    </Col>
                    <Col xs={2}>
                      <Badge bg="secondary">{prod.count}</Badge>
                    </Col>
                    <Col xs={2} className="text-end">
                      <h6>${(prod.price * prod.count).toFixed(2)}</h6>
                    </Col>
                    <Col xs={1} className="text-end">
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => removeItem(prod.id)}
                        title="Eliminar"
                      >
                        <Trash size={16} />
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
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