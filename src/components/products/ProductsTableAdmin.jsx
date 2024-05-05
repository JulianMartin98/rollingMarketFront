import { Table, Button, Modal, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useState } from "react";
import { ProductsProvider } from "../../context/ProductsContext";
import ProductsForm from "./ProductsForm";
import  '../products/TableStyle.css'

const ProductsTable = () => {
  const { productos, deleteProductos } = useContext(ProductsProvider);
  const [editarProductos, setEditarProductos] = useState(null);

  const [show, setShow] = useState(false);
  //formateo de hora
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleClose = () => setShow(false);

  const handleEdit = (producto) => {
    setEditarProductos(producto);
    setShow(true);
  };

  const handleAgregarProducto = () => {
    setEditarProductos(null); // Establece editarProductos en null al agregar un producto nuevo
    setShow(true);
  };

  return (
    <>
      <div className="boton-agregar-producto-padre">
        <h2 className="titulo-admin">Administrar Productos</h2>
        <Button
          className="boton-agregar-producto"
          onClick={handleAgregarProducto}
        >
          Agregar Producto
        </Button>
      </div>
      {productos.length === 0 ? (
        <h1 className="text-center">No hay productos para mostrar</h1>
      ) : (
        <Container>
          <Table variant="link" className="tabla" striped bordered hover>
            <thead>
              <tr className="subtitulo-tabla">
                <th>Producto</th>
                <th className="columna-categoria">Categoría</th>
                <th>Descripción</th>
                <th>Stock</th>
                <th>Precio</th>
                <th className="imagen columna-fecha">
                  Fecha última Modificación
                </th>
                <th className="imagen columna-imagen">Imagen</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((producto) => (
                <tr className="contenido-tabla">
                  <td>
                    <h5></h5>
                    {producto.name}
                  </td>
                  <td className="columna-categoria">
                    <h5></h5>
                    {producto.category}
                  </td>
                  <td>
                    <h5></h5>
                    {producto.description}
                  </td>
                  <td>
                    <h5></h5>
                    {producto.stock}
                  </td>
                  <td>
                    <h5></h5>${producto.price}
                  </td>
                  <td className="columna-fecha">
                    <h5></h5>
                    {formatDate(producto.updatedAt)}
                  </td>
                  <td className="columna-imagen">
                    <img
                      src={producto.image}
                      style={{ width: "70px", height: "60px" }}
                    />
                  </td>
                  <td>
                    <Button
                      className="boton-crud"
                      onClick={() => handleEdit(producto)}
                      variant="link"
                    >
                      <i class="bi bi-pencil-square"></i>
                    </Button>
                    <Button
                      className="boton-crud"
                      variant="link"
                      onClick={() => deleteProductos(producto._id)}
                    >
                      <i class="bi bi-trash"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title>
            {editarProductos ? "Editar Producto" : "Agregar Producto"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProductsForm
            editarProductos={editarProductos}
            handleClose={handleClose}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProductsTable;
