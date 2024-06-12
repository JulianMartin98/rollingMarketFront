import React from 'react';
import '../aboutUs/AboutUs.css';
import { Container, Row, Col, Card, Button, ButtonGroup } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Nacho from '../../assets/img/aboutUs/Nacho.png';
import Julian from '../../assets/img/aboutUs/Julian.png';
import Gabriel from '../../assets/img/aboutUs/Gabriel.png';
import Jorge from '../../assets/img/aboutUs/Jorge.png';
import Alvaro from '../../assets/img/aboutUs/Alvaro.png';

export function AboutUs() {
  return (
    <>
      <Container fluid className="bodyAboutUs">
        <Container fluid>
          <Row>

            <Col md={12} className="primeraCardAboutUs d-flex justify-content-center" >
              <Card className="cardPrincipalAboutUs card-principal-hover text-center">
                <Card.Body>
                  <Card.Text>
                    Somos Rolling Coders, un equipo apasionado de desarrolladores web dedicados a crear soluciones digitales innovadoras. Nuestra misión es proporcionar a nuestros clientes experiencias excepcionales y aplicaciones efectivas, colaborando estrechamente con ellos para materializar su visión. Nos comprometemos con la excelencia técnica y la atención al detalle, adaptándonos constantemente a las últimas tendencias tecnológicas. Más que construir sitios y aplicaciones, forjamos asociaciones duraderas. Estamos preparados para enfrentar nuevos desafíos y crecer juntos. ¡Únete a nosotros en este emocionante viaje hacia el mundo de las posibilidades digitales!
                  </Card.Text>
                  <Button variant="primary" className="botonCardPrincipalAboutUs ">Conocer más</Button>

                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mb-3">

            <Col md={4} className="d-flex justify-content-center">
              <Card className="cardSecundariaAboutUs text-center">
                <Card.Img variant="top" src={Jorge} />
                <Card.Body>
                  <Card.Title>Jorge Medina</Card.Title>
                  <Card.Text>
                    ¡Hola! Soy Jorge, tengo 30 años y me encuentro inmerso en mi formación en Ingeniería en Sistemas de Información. Desde joven, he estado fascinado por la tecnología y cómo puede transformar nuestras vidas. Mi experiencia y dedicación se reflejan en mi trabajo en Rolling Coders, donde me enorgullece formar parte de un equipo que constantemente desafía los límites de la creatividad y la innovación.
                  </Card.Text>
                  <ButtonGroup className="grupoBotonesAboutUsHover">
                    <Button variant="primary" className="botonCardSecuAboutUs rounded-circle mx-1"><i className="bi bi-github"></i></Button>
                    <Button variant="primary" className="botonCardSecuAboutUs rounded-circle mx-1"><i className="bi bi-linkedin"></i></Button>
                    <Button variant="primary" className="botonCardSecuAboutUs rounded-circle mx-1"><i className="bi bi-instagram"></i></Button>
                  </ButtonGroup>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="d-flex justify-content-center">
              <Card className="cardSecundariaAboutUs text-center">
                <Card.Img variant="top" src={Nacho} />
                <Card.Body>
                  <Card.Title>Ignacio Skibski</Card.Title>
                  <Card.Text>
                    Saludos, soy Ignacio, un apasionado de la programación de 21 años. Estoy actualmente estudiando Tecnicatura en Programación, y cada día descubro nuevas posibilidades dentro del mundo del código. En Rolling Coders, encuentro un espacio para poner en práctica mis habilidades y aprender de mis compañeros, contribuyendo así a la creación de soluciones digitales que realmente impacten positivamente en la vida de las personas.
                  </Card.Text>
                  <ButtonGroup className="grupoBotonesAboutUsHover">
                    <Button variant="primary" className="botonCardSecuAboutUs rounded-circle mx-1"><i className="bi bi-github"></i></Button>
                    <Button variant="primary" className="botonCardSecuAboutUs rounded-circle mx-1"><i className="bi bi-linkedin"></i></Button>
                    <Button variant="primary" className="botonCardSecuAboutUs rounded-circle mx-1"><i className="bi bi-instagram"></i></Button>
                  </ButtonGroup>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="d-flex justify-content-center">
              <Card className="cardSecundariaAboutUs text-center">
                <Card.Img variant="top" src={Gabriel} />
                <Card.Body>
                  <Card.Title>Gabriel Urueña</Card.Title>
                  <Card.Text>
                    Hola, soy Gabriel. Tengo 22 años y actualmente estoy estudiando Ingeniería Geodésica. Desde que descubrí mi pasión por la programación, he encontrado una forma de combinar mis habilidades técnicas con mi interés por resolver problemas. En el equipo de Rolling Coders, me encanta contribuir con mi entusiasmo y conocimientos para crear soluciones digitales innovadoras.
                  </Card.Text>
                  <ButtonGroup className="grupoBotonesAboutUsHover">
                    <Button variant="primary" className="botonCardSecuAboutUs rounded-circle mx-1"><i className="bi bi-github"></i></Button>
                    <Button variant="primary" className="botonCardSecuAboutUs rounded-circle mx-1"><i className="bi bi-linkedin"></i></Button>
                    <Button variant="primary" className="botonCardSecuAboutUs rounded-circle mx-1"><i className="bi bi-instagram"></i></Button>
                  </ButtonGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>


          <Row>
            <Col md={6} className="d-flex justify-content-center mb-3">
              <Card className="cardSecundariaAboutUs text-center">
                <Card.Img variant="top" src={Julian} />
                <Card.Body>
                  <Card.Title>Julián Martin</Card.Title>
                  <Card.Text>
                    ¡Hola! Soy Julián, tengo 25 años y estoy cursando Ingeniería en Sistemas. En el equipo de Rolling Coders, me apasiona contribuir con mi creatividad y mis habilidades técnicas para crear soluciones digitales innovadoras que superen las expectativas de nuestros clientes. Cada línea de código que escribo es un paso más hacia nuestro objetivo compartido: ofrecer experiencias web excepcionales.              </Card.Text>
                  <ButtonGroup className="grupoBotonesAboutUsHover">
                    <Button variant="primary" className="botonCardSecuAboutUs rounded-circle mx-1"><i className="bi bi-github"></i></Button>
                    <Button variant="primary" className="botonCardSecuAboutUs rounded-circle mx-1"><i className="bi bi-linkedin"></i></Button>
                    <Button variant="primary" className="botonCardSecuAboutUs rounded-circle mx-1"><i className="bi bi-instagram"></i></Button>
                  </ButtonGroup>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="d-flex justify-content-center mb-3">
              <Card className="cardSecundariaAboutUs text-center">
                <Card.Img variant="top" src={Alvaro} />
                <Card.Body>
                  <Card.Title>Alvaro Deguer</Card.Title>
                  <Card.Text>
                    ¡Hola a todos! Soy Álvaro, tengo 32 años y estudio para Programador Universitario con experiencia en (QA). En Rolling Coders, me enorgullece aplicar mi experiencia y mis habilidades para crear productos digitales que no solo sean funcionales, sino que también ofrezcan una experiencia excepcional a nuestros usuarios. ¡Estoy emocionado de ser parte de este equipo y contribuir al éxito de nuestros proyectos!
                  </Card.Text>
                  <ButtonGroup className="grupoBotonesAboutUsHover">
                    <Button variant="primary" className="botonCardSecuAboutUs rounded-circle mx-1"><i className="bi bi-github"></i></Button>
                    <Button variant="primary" className="botonCardSecuAboutUs rounded-circle mx-1"><i className="bi bi-linkedin"></i></Button>
                    <Button variant="primary" className="botonCardSecuAboutUs rounded-circle mx-1"><i className="bi bi-instagram"></i></Button>
                  </ButtonGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

