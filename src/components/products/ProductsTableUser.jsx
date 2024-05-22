import {Table, Button, Modal, Container} from 'react-bootstrap';
import '../products/TableStyle.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useContext, useState } from 'react';
import { ProductsProvider } from '../../context/ProductsContext';
import ProductsFormUser from '../products/ProductsFormUser';
import ProductsCategoryDropdown from '../products/ProductsCategoryDropdown';




const ProductsTableUser = () => {

    const {productos, deleteProductos} = useContext(ProductsProvider)
    const [editarProductos, setEditarProductos] = useState(null)
    const [show, setShow] = useState(false);
    //formateo de hora
    const formatDate = (dateString) => {
      const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const handleClose = () => setShow(false);
    

    const handleEdit = (producto) => {
      setEditarProductos(producto)
      setShow(true)
    }



    const handleAgregarProducto = () => {
      setEditarProductos(null); // Establece editarProductos en null al agregar un producto nuevo
      setShow(true);
    };

  return (

    <>
    <ProductsCategoryDropdown/>
    <h2 className='text-center mt-3 mb-3 titulo-admin2'>Administrar Productos</h2>
    <div className='boton-agregar-producto-padre'>
    </div>
    
    {productos.length === 0 ? (
      <h1 className="text-center">No hay productos para mostrar</h1>
    ) : (
      <Container >

      <Table variant='link' className='tabla' striped bordered hover>
      <thead>
        <tr className='subtitulo-tabla'>
          <th>Producto</th>
          <th className='columna-categoria'>Categoría</th>
          <th>Descripción</th>
          <th>Stock</th>
          <th>Precio</th>
          <th className='imagen columna-fecha'>Fecha última Modificacion</th>
          <th className='imagen columna-imagen'>Imagen</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto) => (
          <tr className='contenido-tabla'>
          <td><h5></h5>{producto.name}</td>
          <td className='columna-categoria'><h5></h5>{producto.category}</td>
          <td><h5></h5>{producto.description}</td>
          <td><h5></h5>{producto.stock}</td>
          <td><h5></h5>${producto.price}</td>
          <td className='columna-fecha'><h5></h5>{formatDate(producto.updatedAt)}</td>
          <td className='columna-imagen'><img src={producto.image} style={{ width: '70px', height: '60px' }} /></td>
          <td>
            <Button className='boton-crud' onClick={() => handleEdit(producto)} variant="link"><i className="bi bi-pencil-square"></i></Button>
          </td>
        </tr>
        ))}
      </tbody>
      
    </Table>
    </Container>
    )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editarProductos ? 'Editar Producto' : 'Agregar Producto'}</Modal.Title>
        </Modal.Header>
        <Modal.Body> <ProductsFormUser editarProductos={ editarProductos } handleClose={handleClose}/> </Modal.Body>
      </Modal>
      
    </>
    
  )
}

export default ProductsTableUser