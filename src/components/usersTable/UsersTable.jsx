import { Table, Button, Modal, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useContext, useState } from 'react';
import { UsersProvider } from '../../context/UsersContext';

const UsersTable = () => {

  const { usuarios } = useContext(UsersProvider);


  // const handleAgregarUsuario = () => {
  //   setEditarUsuario(null); // Establece editarProductos en null al agregar un producto nuevo
  //   setShow(true);
  // };


  return (

    <>


      <div>
        <div className="d-flex justify-content-around align-items-center">
          <h2 className="title-adminpage">Administrar Usuarios</h2>
          <Button variant="success"
            className="m-2 p-2 rounded-3 btn-md fw-bold"
          // onClick={handleAgregarProducto}
          >
            Agregar Usuario
          </Button>

        </div>

        {usuarios.length === 0 ? (
          <h1 className="text-center">No hay usuarios para mostrar</h1>
        ) : (

          <Container >
            <Table variant="link" responsive bordered className="border align-middle text-center mb-5" hover>

              <thead className="table-warning table-group-divider">
                <tr className="align-middle text-center">
                  <th>Usuario</th>
                  <th>Apellido</th>
                  <th>Role</th>
                  <th>Email</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {usuarios.users.map((usuario) => (
                  <tr key={usuario._id}>
                    <td>{usuario.name}</td>
                    <td>{usuario.surname}</td>
                    <td>{usuario.rol}</td>
                    <td>{usuario.email}</td>
                    <td>
                      {/* <Button className="button-crud-adminpage" onClick={() => handleEdit(usuario)} variant="link"><i className="bi bi-pencil-square"></i></Button>
                      <Button className="button-crud-adminpage" onClick={() => deleteUsuarios(usuario._id)} variant="link"><i className="bi bi-trash"></i></Button> */}
                      <Button className="button-crud-adminpage" variant="link"><i className="bi bi-pencil-square"></i></Button>
                      <Button className="button-crud-adminpage" variant="link"><i className="bi bi-trash"></i></Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
        )}
      </div>


    </>

  );
};

export default UsersTable