import { Row, Col, Button, Badge, ListGroup } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";

const CartItem = ({ prod, removeProduct }) => {
  return (
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
            onClick={() => removeProduct(prod.id)}
            title="Eliminar"
          >
            <Trash size={16} />
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default CartItem;
