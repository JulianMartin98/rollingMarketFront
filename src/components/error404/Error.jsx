import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import carrito from "../../assets/img/error404/carrito.png";
import Button from "react-bootstrap/Button";
import "./styleError.css";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.rol === "admin") {
      navigate("/admin");
    } else if (user) {
      navigate("/usuario");
    } else {
      navigate("/login");
    }
  };

  return (
    <Container
      fluid
      className="imgBack justify-content-center align-items-center"
    >
      <Container>
        <Row className="justify-content-center align-items-center">
          <div className="col-12 col-md-6 text-center">
            <img
              src={carrito}
              className="imgShoppingCart"
              alt="imagenError404"
            />
          </div>
          <div className="col-12 col-md-6 text-center mt-2">
            <h1 className="tittleError">
              <strong>¡Error 404!</strong>
              <br />
              Página no encontrada
            </h1>
            <Button onClick={handleHome} variant="link" className="buttomBack">
              Volver a la página principal
            </Button>{" "}
          </div>
        </Row>
      </Container>
    </Container>
  );
};

export default Error404;
