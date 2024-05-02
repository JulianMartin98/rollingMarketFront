import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image, Button, Modal, Form } from 'react-bootstrap';
import '../navBar/Navigator.css'
import imgCarrito from '../../assets/img/navBar/imgCarrito.png';
import logo3 from '../../assets/img/navBar/logo3.png';
import { useNavigate } from "react-router-dom";
import { useState, useContext } from 'react';
// import Login from '../login/Login';
// import { UsersProvider } from '../../context/UsersContext';



export function Navigator() {

  const [show, setShow] = useState(false);

  const { logOut } = useContext(UsersProvider);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const user = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();

  return (
    <>
      <div className='ms-auto text-center colorDivTopNav' xs={12}><img src={imgCarrito} alt="carrito_logo" />RollingMarket <img src={imgCarrito} alt="Carrito_logo" /></div>


      <Navbar expand="lg" className="bg-body-secondary p-2">
        <Container fluid>
          <Navbar.Brand href="/">
            <Image src={logo3} width={65} height={65} roundedCircle alt="logo_Grupo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav variant='underline'>
              <Nav.Link href="/contacto">Contacto</Nav.Link>
              <Nav.Link href="/quienesSomos">Quienes Somos</Nav.Link>
            </Nav>

            <Form className="ms-auto">
              <Nav className="d-flex align-items-center">
                {user ? (
                  user.rol === 'admin' ? (
                    <Nav.Link onClick={() => navigate("/admin")}>
                      <Button className='p-2 ms-auto'>Panel Administrador</Button>
                    </Nav.Link>
                  ) : (
                    <Nav.Link onClick={() => navigate("/mainpage")}>
                      <Button className='p-2 ms-auto'>Panel Usuario</Button>
                    </Nav.Link>
                  )
                ) : (
                  <Button className='p-2 ms-auto' variant="success" onClick={handleShow}>
                    Iniciar Sesión
                  </Button>
                )}
                {user ? (
                  <Button className='p-2 ms-auto botonCerrarSesion' size="sm" variant="danger" onClick={() => logOut()}>
                    Cerrar Sesión
                  </Button>
                ) : null}
              </Nav>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Login handleClose={handleClose} handleShow={handleShow} />
        </Modal.Body>
      </Modal>
    </>
  );
};