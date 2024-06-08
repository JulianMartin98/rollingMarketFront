import React from 'react';
import '../contact/Contact.css';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';


export function CardsContact() {
  return (
    <>
      <Container fluid className='imagenFondoPieContacto mt-5 mb-5'>
        <Row className='d-flex align-items-stretch'>
          <Col xs={12} md={4}>
            <Card className="text-center mb-3 p-2 cardFondoContacto">
              <Card.Header className='cardHeaderContacto'>
                <Card.Title>Demo de Prueba para tu sitio</Card.Title>
              </Card.Header>
              <Card.Body className='cardFondoContacto'>
                <Card.Text className='cardTextFondoContacto'>
                  Reserva tu propia web con un solo click!.
                </Card.Text>
                <Button variant="dark" href="*">Click Aquí!</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="text-center mb-3 p-2 cardFondoContacto">
              <Card.Header className='cardHeaderContacto'>
                <Card.Title>Nuestro Centro de Ayuda</Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text className='cardTextFondoContacto'>
                  Comunicate con nuestros asesores de forma inmediata.
                </Card.Text>
                <Button variant="dark" href="*">Click Aquí!</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className='mb-4'>
            <Card className="text-center mb-3 p-2 cardFondoContacto">
              <Card.Header className='cardHeaderContacto'>
                <Card.Title>Unite a nuestro proyecto</Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text className='cardTextFondoContacto'>
                  Forma parte de nuestro equipo para futuros desarrollos
                </Card.Text>
                <Button variant="dark" href="*">Click Aquí!</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
