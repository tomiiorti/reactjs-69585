import {Card, Button, Col} from 'react-bootstrap';
import { useNavigate } from 'react-router';
import '../../css/Item.css';
import { CurrencyDollar } from 'react-bootstrap-icons';

export default function Item({ item }) {
  const navigate = useNavigate();
  
  return (
    <Col xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex">
      <Card className="h-100 w-100 shadow-sm product-card">
        <div className="card-img-container">
          <Card.Img 
            variant="top" 
            src={item.img} 
            className="card-img-standard"
            alt={item.name}
          />
          {item.stock <= 5 && item.stock > 0 && (
            <span className="stock-badge badge bg-warning">Últimas {item.stock} unidades</span>
          )}
          {item.stock === 0 && (
            <span className="stock-badge badge bg-danger">Sin stock</span>
          )}
        </div>
        <Card.Body className="d-flex flex-column">
          <Card.Title className="h6 text-truncate">{item.name}</Card.Title>
          <Card.Text className="text-muted small mb-2">
            {item.category}
          </Card.Text>
          
          {/* Sección de precio destacada */}
          <div className="price-container mt-2 mb-3">
            <span className="price-label">Precio:</span>
            <span className="price-value">
              <CurrencyDollar size={14} className="me-1" />
              {item.price?.toFixed(2)}
            </span>
          </div>
          
          <div className="mt-auto">
            <Button 
              variant={item.stock === 0 ? "secondary" : "outline-primary"} 
              size="sm" 
              className="w-100"
              onClick={() => navigate(`/product/${item.id}`)}
              disabled={item.stock === 0}
            >
              {item.stock === 0 ? "Sin stock" : "Ver detalles"}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}