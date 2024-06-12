import React from 'react'
import '../contact/Contact.css'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';



export function MapsAndForm() {
  return (
    <>
      <Container className='mt-3 p-2 containerContacto'>
        <Row>
          <Col md={6}>
            <div className='p-2 mapsYForm'>
              <iframe className='' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14240.187713396721!2d-65.21420511645508!3d-26.838459654448318!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1711827232447!5m2!1ses-419!2sar" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </Col>

          <Col md={6}>
            <div className='mt-2 p-2 divFormContacto' />
            <Form className='formContacto'>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="juanperez@hotmail.com" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label className='mt-3'>Dejanos tu consulta!</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder='Consulta' maxLength={155} minLength={10} required />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox" className='p-2'>
                <Form.Check className='d-flex justify-content-center pb-2' type="checkbox" label="Estoy de acuerdo con los terminos y condiciones" required />
              </Form.Group>
              <div className='d-flex justify-content-center '>
                <Button variant='success' type="submit">
                  Enviar Consulta
                </Button>
              </div>
            </Form>
            <div className='d-flex justify-content-center text-center
      align-items-center m-3 p-3'>
              Comunicate de manera gratuita llamando al 0381 578-3030 de lunes a sábados de 8 a 21 hs.
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
