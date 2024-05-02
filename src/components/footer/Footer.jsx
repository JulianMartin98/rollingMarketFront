import "./styleFooter.css";
import logoFooter from "../../assets/img/footer/logoFooter.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Footer = () => {
  return (
    <>
      <Container fluid className="containerFooter text-center">
        <Row className=" p-3">
          <ul className="col-12 col-md-4 category">
            <h5 className="titleList">Secciones</h5>
            <li className="article">
              <a href="/contacto">Contacto</a>
            </li>
            <li className="article">
              <a href="/quienesSomos">Quiénes Somos</a>
            </li>
          </ul>

          <ul className="col-12 col-md-4">
            <h5 className="titleList">Dirección:</h5>
            <li className="article">
            Gral. Paz 576, San Miguel de Tucumán, Tucumán.
            </li>
            <hr />
            <h5 className="titleList">Horarios:</h5>
            <li className="article">Lunes a sabados de 9 a 18hrs.</li>
          </ul>

          <div className="col-12 col-md-4 d-flex align-items-center justify-content-center">
            <a href="*">
              <img
                className="logoFooter"
                src={logoFooter}
                alt="logoRollingMarket"
              />
            </a>
          </div>
        </Row>
        <Row className="copyright pt-3 justify-content-center">
          <p className="copy col-12 col-md-8 pt-2">
            &copy; 2024 RollingMarket | Tenemos todo lo que necesitas -{" "}
            <a href="*">Política de privacidad</a>
          </p>

          <div className="col-12 col-md-4">
            <ul className="networkList">
              <li>
                <a href="https://www.facebook.com/RollingCodeSchool/">
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/rollingcodeschool/?hl=es">
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
              <li>
                <a href="*">
                  <i className="bi bi-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
