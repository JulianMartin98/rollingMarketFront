import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Swal from 'sweetalert2';

export const UsersProvider = createContext();



const UsersContext = ({ children }) => {
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioLogueado, setUsuarioLogueado] = useState();



  const getUsers = async () => {
    try {

      const token = localStorage.getItem("token");

      const response = await axios.get(
        "https://rollingmarketback.onrender.com/user/"
        , {
          headers: {
            authorization: `${token}`,
          }
        }
      );
      setUsuarios(response.data.users);
    } catch (error) {
      console.log(error);
    }
  };

  const addUser = async (usuario) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("Token no encontrado");
      }

      const response = await axios.post("https://rollingmarketback.onrender.com/user/create", usuario, {
        headers: {
          authorization: `${token}`,
        },
      });

      if (response.status === 201 || response.status === 200) {
        await getUsers();
      } else {
        Swal.fire('Error', 'El email ya se encuentra registrado', 'error');
      }
    } catch (error) {
      console.error('Error al añadir usuario:', error);
      Swal.fire('Error', 'Hubo un problema al añadir el usuario', 'error');
    }
  };



  const deleteUsuario = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const confirmacion = await Swal.fire({
        title: '¿Estás seguro que deseas eliminar el usuario?',
        text: 'Esta acción no se puede deshacer',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
      });

      if (confirmacion.isConfirmed) {
        await axios.delete(`https://rollingmarketback.onrender.com/user/delete/${id}`, {
          headers: {
            authorization: `${token}`,
          }
        });
        await getUsers();
        Swal.fire('¡Eliminado!', 'El usuario ha sido eliminado correctamente', 'success');
      }
    } catch (error) {
      console.log(error);
      Swal.fire('¡Error!', 'Ha ocurrido un error al eliminar el usuario', 'error');
    }
  };



  const editUsuario = async (usuario) => {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("No se proporcionó un token");
    }

    try {
      await axios.put(
        `https://rollingmarketback.onrender.com/user/update/${usuario.id}`,
        usuario,
        {
          headers: {
            authorization: `${token}`,
          },
        }
      );
      await getUsers();
    } catch (error) {
      console.log(error);
    }
  };


  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.href = "/login";
  };



  const loginUsuario = async (usuario) => {
    try {
      const response = await axios.post(
        "https://rollingmarketback.onrender.com/user/login",
        usuario
      );
      console.log(response);
      const token = response.data.token;
      localStorage.setItem("token", token);
      const decoded = jwtDecode(token);

      setUsuarioLogueado(decoded);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };


  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UsersProvider.Provider
      value={{
        usuarios,
        getUsers,
        addUser,
        logOut,
        deleteUsuario,
        editUsuario,
        loginUsuario,
        usuarioLogueado,
      }}
    >
      {children}
    </UsersProvider.Provider>
  );
};

export default UsersContext;