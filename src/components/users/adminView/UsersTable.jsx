import { Table, Button, Modal, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useState, useEffect } from 'react';
import { UsersProvider } from '../../../context/UsersContext';
import UsersForm from './UsersForm';
import Swal from 'sweetalert2';



const UsersTable = () => {

  const { usuarios, deleteUsuario } = useContext(UsersProvider);
  const [editarUsuario, setEditarUsuario] = useState(null);
  const [show, setShow] = useState(false);
  const [loggedInUserEmail, setLoggedInUserEmail] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.email) {
      setLoggedInUserEmail(user.email);
    }
  }, []);

  const handleClose = () => setShow(false);

  const handleEdit = (usuario) => {
    if (usuario.email === loggedInUserEmail) {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'No puedes editar tu propio usuario',
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      setEditarUsuario(usuario);
      setShow(true);
    }
  };

  const handleDelete = (userId, userEmail) => {
    if (userEmail === loggedInUserEmail) {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'No puedes eliminar tu propio usuario',
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      deleteUsuario(userId);
    }
  };

  const handleAgregarUsuario = () => {
    setEditarUsuario(null);
    setShow(true);
  };

  return (

    <>

      <div>
        <div className="d-flex justify-content-around align-items-center">
          <h2 className="title-adminpage">Administrar Usuarios</h2>
          <Button
            variant="success"
            className="m-2 p-2 rounded-3 btn-md fw-bold"
            onClick={handleAgregarUsuario}
          >
            Agregar Usuario
          </Button>

        </div>

        {usuarios.length === 0 ? (
          <h1 className="text-center">No hay usuarios para mostrar</h1>
        ) : (

          <Container>
            <Table variant="link" responsive bordered className="border align-middle text-center mb-5" hover>

              <thead className="table-warning table-group-divider">
                <tr className="align-middle text-center">
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Rol</th>
                  <th>Usuario</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {usuarios.users.map((usuario) => (
                  <tr key={usuario._id}>
                    <td>{usuario.name}</td>
                    <td>{usuario.surname}</td>
                    <td>
                      {usuario.rol}
                      <Button
                        className="button-crud-adminpage"
                        onClick={() => handleEdit(usuario)}
                        variant="link"
                      >
                        <i className="bi bi-pencil-square"></i>
                      </Button>
                    </td>
                    <td>
                      {loggedInUserEmail === usuario.email && (
                        <i className="bi bi-person-fill-lock" style={{ marginRight: '5px', fontSize: '24px', color: 'black' }}></i>
                      )} {usuario.email}
                    </td>
                    <td>
                      <Button
                        className="button-crud-adminpage"
                        onClick={() => handleDelete(usuario._id, usuario.email)}
                        variant="link"
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
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="w-100 d-flex justify-content-center align-items-center title-adminpage">{editarUsuario ? 'Editar Usuario' : 'Agregar Usuario'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UsersForm editarUsuario={editarUsuario} handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>

  );
};

export default UsersTable;
