import React from 'react';
import { Card, Container, Row, Col, Badge } from 'react-bootstrap';
import ItemCount from './ItemCount';
import '../../css/ItemDetail.css'; // Archivo CSS para estilos personalizados

export default function ItemDetail({ detail }) {
  return (
    <Container className="my-5">
      <Card className="shadow">
        <Row className="g-0">
          {/* Columna de la imagen */}
          <Col md={6}>
            <div className="detail-img-container">
              <Card.Img 
                src={detail?.img} 
                alt={detail?.name} 
                className="detail-img"
              />
            </div>
          </Col>
          
          {/* Columna de la información */}
          <Col md={6}>
            <Card.Body className="h-100 d-flex flex-column p-4">
              <Card.Title as="h2" className="mb-3">{detail?.name}</Card.Title>
              
              <div className="mb-3">
                <Badge bg="secondary" className="me-2">{detail?.category}</Badge>
                {detail?.stock > 5 ? (
                  <Badge bg="success">Disponible</Badge>
                ) : detail?.stock > 0 ? (
                  <Badge bg="warning">Últimas unidades</Badge>
                ) : (
                  <Badge bg="danger">Sin stock</Badge>
                )}
              </div>
              
              <Card.Text className="text-muted mb-4">
                {detail?.description}
              </Card.Text>
              
              <Card.Text className="h4 mb-4">
                ${detail?.price?.toFixed(2)}
              </Card.Text>
              
              <div className="mt-auto">
                <ItemCount 
                  product={detail} 
                  initial={1} 
                  className="detail-counter"
                />
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}