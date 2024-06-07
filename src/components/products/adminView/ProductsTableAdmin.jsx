import { Table, Button, Modal, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useState } from "react";
import { ProductsProvider } from "../../../context/ProductsContext";
import ProductsForm from "./ProductsFormAdmin";
import '../TableStyle.css'

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
      <div>
        <div className="d-flex justify-content-around align-items-center">
          <h2 className="title-adminpage">Administrar Productos</h2>
          <Button variant="success"
            className="m-2 p-2 rounded-3 btn-md fw-bold"
            onClick={handleAgregarProducto}
          >
            Agregar Producto
          </Button>
        </div>
        {productos.length === 0 ? (
          <h1 className="text-center">No hay productos para mostrar</h1>
        ) : (
          <Container>
            <Table variant="link" responsive bordered className="border align-middle text-center mb-5" hover>
              <thead className="table-warning table-group-divider">
                <tr className="align-middle text-center">
                  <th>Producto</th>
                  <th>Categoría</th>
                  <th>Descripción</th>
                  <th>Stock</th>
                  <th>Precio</th>
                  <th>Fecha última Modificación</th>
                  <th>Imagen</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {productos.map((producto) => (
                  <tr key={producto._id}>
                    <td>
                      <h5></h5>
                      {producto.name}
                    </td>
                    <td>
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
                    <td>
                      <h5></h5>
                      {formatDate(producto.updatedAt)}
                    </td>
                    <td>
                      <img className="img-table"
                        src={producto.image}
                      />
                    </td>
                    <td>
                      <Button
                        className="button-crud-adminpage"
                        onClick={() => handleEdit(producto)}
                        variant="link"
                      >
                        <i className="bi bi-pencil-square"></i>
                      </Button>
                      <Button
                        className="button-crud-adminpage"
                        variant="link"
                        onClick={() => deleteProductos(producto._id)}
                      >
                        <i className="bi bi-trash"></i>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
        )}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header className="p-2 m-2" closeButton>
            <Modal.Title className="w-100 d-flex justify-content-center align-items-center title-adminpage">
              {editarProductos ? "Editar Producto" : "Agregar Productos"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ProductsForm
              editarProductos={editarProductos}
              handleClose={handleClose}
            />
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default ProductsTable;
