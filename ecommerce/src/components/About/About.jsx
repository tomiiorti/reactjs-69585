import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AboutPage() {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ 
      height: 'calc(100vh - 56px)',
    }}>
      <Row>
        <Col className="text-center">
          <h1 className="display-1 text-muted mb-4">Coming Soon</h1>
          <p className="lead">Estamos trabajando en esta sección</p>
        </Col>
      </Row>
    </Container>
  );
}