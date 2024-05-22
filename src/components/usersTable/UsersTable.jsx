import { Table, Button, Modal, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useContext, useState } from 'react';
import { UsersProvider } from '../../context/UsersContext';

const UsersTable = () => {

  const { usuarios } = useContext(UsersProvider)
  console.log(usuarios)
  return (

    <>
      <div>
        <h2 className='titulo-admin d-flex justify-content-center '>Administrar Usuarios</h2>

        {usuarios.length === 0 ? (
          <h1 className="text-center">No hay usuarios para mostrar</h1>
        ) : (
          <Container >

            <Table responsive className='mb-0' striped bordered hover>

              <thead>
                <tr className='subtitulo-tabla'>
                  <th >Usuario</th>
                  <th>Apellido</th>
                  <th>Role</th>
                  <th>Email</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {usuarios.users.map((usuario) => (
                  <tr className='contenido-tabla'>
                    <td>{usuario.name}</td>
                    <td>{usuario.surname}</td>
                    <td>{usuario.rol}</td>
                    <td>{usuario.email}</td>
                    <td><Button className='boton-crud' variant="link"><i className="bi bi-pencil-square"></i></Button></td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
        )}
      </div>
    </>

  )
}

export default UsersTable