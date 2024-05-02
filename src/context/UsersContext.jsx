import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const UsersProvider = createContext();



const UsersContext = ({ children }) => {
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioLogueado, setUsuarioLogueado] = useState();



  const getUsers = async () => {
    try {

      const token = localStorage.getItem("token");

      const response = await axios.get(
        "http://localhost:4000/api/user/"
        , {
          headers: {
            authorization: `${token}`,
          }
        }
      );
      setUsuarios(response.data);
    } catch (error) {
      console.log(error);
    }
  };


  const addUser = async (usuario) => {
    try {
      await axios.post("http://localhost:4000/api/user/create", usuario);
      await getUsers();
    } catch (error) {
      console.log(error);
    }
  };


  const deleteUsuario = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:4000/api/user/delete/${id}`, {
        headers: {
          authorization: `${token}`,
        }
      });
      await getUsers();
    } catch (error) {
      console.log(error);
    }
  };



  const editUsuario = async (usuario) => {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("No se proporcionó un token");
    }

    try {
      await axios.put(
        `http://localhost:4000/api/user/update/${usuario.id}`,
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
        "http://localhost:4000/api/user/login",
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