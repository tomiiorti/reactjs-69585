import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import linkedinLogo from '../../assets/linkedinLogo.avif';

export default function ContactPage() {
  // Reemplaza con tu URL real de LinkedIn
  const linkedinUrl = "https://www.linkedin.com/in/tomasorti/";

  return (
    <Container className="d-flex align-items-center justify-content-center vh-100">
      <Row>
        <Col md={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
          <Card className="text-center shadow-lg" style={{ borderRadius: '15px' }}>
            <Card.Body>
            <div className="mb-4">
                <img 
                  src={linkedinLogo} 
                  alt="LinkedIn" 
                  style={{
                    width: '80px',
                    height: '80px',
                    objectFit: 'contain'
                  }}
                />
              </div>
              <Card.Title className="mb-3">Conectemos en LinkedIn</Card.Title>
              <Card.Text className="mb-4">
                Haz clic en el botón para visitar mi perfil profesional.
              </Card.Text>
              <Button 
                variant="primary" 
                href={linkedinUrl} 
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                style={{ backgroundColor: '#0a66c2', borderColor: '#0a66c2' }}
              >
                Ver mi perfil
              </Button>
            </Card.Body>
            <Card.Footer className="text-muted">
              ¡Gracias por tu interés!
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}