import { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { UsersProvider } from '../../../context/UsersContext';
import '../../products/TableStyle.css'
import Swal from 'sweetalert2';


const UsersForm = ({ editarUsuario, handleClose }) => {
  const { addUser, editUsuario } = useContext(UsersProvider);

  const [usuario, setUsuario] = useState({
    id: editarUsuario ? editarUsuario._id : null,
    name: editarUsuario ? editarUsuario.name : '',
    surname: editarUsuario ? editarUsuario.surname : '',
    rol: editarUsuario ? editarUsuario.rol : '',
    email: editarUsuario ? editarUsuario.email : '',
    password: '' // Solicita contraseña pero nunca la mostrara
  });

  const handleChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editarUsuario) {
      editUsuario(usuario);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Usuario Editado',
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      addUser(usuario);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Usuario Agregado',
        showConfirmButton: false,
        timer: 1500,
      });
    }
    handleClose();
    setUsuario({
      id: '',
      name: '',
      surname: '',
      rol: '',
      email: '',
      password: '' // Restablecer campo de contraseña
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          value={usuario.name}
          onChange={handleChange}
          name="name"
          placeholder="Nombre del Usuario"
          required
          readOnly={!!editarUsuario} //para editar el campo es de solo lectura
          className={editarUsuario ? 'readonly-field' : ''} // se aplica una clase condicional
          
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Apellido</Form.Label>
        <Form.Control
          type="text"
          value={usuario.surname}
          onChange={handleChange}
          name="surname"
          placeholder="Apellido del Usuario"
          readOnly={!!editarUsuario}
          required
          className={editarUsuario ? 'readonly-field' : ''}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Rol</Form.Label>
        <Form.Select
            value={usuario.rol}
            onChange={handleChange}
            name="rol"
            required
            aria-label="Selecciona el rol del usuario">
            <option value="">Selecciona un rol</option>
            <option value="usuario">Usuario</option>
            <option value="admin">Admin</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={usuario.email}
          onChange={handleChange}
          name="email"
          placeholder="Email del Usuario"
          readOnly={!!editarUsuario}
          required
          className={editarUsuario ? 'readonly-field' : ''}
        />
      </Form.Group>
      {!editarUsuario && (
        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            value={usuario.password}
            onChange={handleChange}
            name="password"
            placeholder="Contraseña"
            required
          />
        </Form.Group>
      )}
      <Button type="submit" variant="link" className='button-add-modal'>
        {editarUsuario ? 'Editar Usuario' : 'Agregar Usuario'}
      </Button>
    </Form>
  );
};

export default UsersForm;
