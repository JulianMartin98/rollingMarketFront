import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Contact } from '../../page/contacto/Contact';
import AboutUsPage from '../../page/aboutUs/AboutUsPage';
import LoginPage from '../../page/login/LoginPage';
import Page404 from '../../page/404/Page404';
import TablaProductos from '../tablaProductos/TablaProductos';
import ProductoTablaUsuario from '../../page/tablaProductoUsuario/ProductoTablaUsuario';

export function Rutas() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user) {
    if (user.rol === 'admin') {
      return (
        <Routes>
          <Route path='/contacto' element={<Contact />} />
          <Route path='/quienesSomos' element={<AboutUsPage />} />
          <Route path='/login' element={<Navigate to="/admin" />} />
          <Route path='/' element={<Navigate to="/admin" />} />
          <Route path='/admin' element={<TablaProductos />} />
          <Route path='/mainpage' element={<ProductoTablaUsuario />} />    {/* REEMPLAZAR POR COMPONENTE USUARIO O SEA MAINPAGE*/}
          <Route path="*" element={<Page404 />} />
        </Routes>
      );
    } else if (user.rol === 'usuario') {
      return (
        <Routes>
          <Route path='/contacto' element={<Contact />} />
          <Route path='/quienesSomos' element={<AboutUsPage />} />
          <Route path='/login' element={<Navigate to="/mainpage" />} />
          <Route path='/' element={<Navigate to="/mainpage" />} />
          <Route path='/admin' element={<Navigate to="/mainpage" />} />       
          <Route path='/mainpage' element={<ProductoTablaUsuario />} />   {/* REEMPLAZAR POR COMPONENTE USUARIO O SEA MAINPAGE*/}
          <Route path="*" element={<Page404 />} />
        </Routes>
      );
    }
  } else {
    return (
      <Routes>
        <Route path='/contacto' element={<Contact />} />
        <Route path='/quienesSomos' element={<AboutUsPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<LoginPage />} />
        <Route path='/admin' element={<Navigate to="/login" />} />
        <Route path='/mainpage' element={<Navigate to="/login" />} /> 
        <Route path="*" element={<Page404 />} />
      </Routes>
    );
  }
}
