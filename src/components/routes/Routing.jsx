import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ContactPage } from '../../pages/contact/ContactPage';
import { AboutUsPage } from '../../pages/aboutUs/AboutUsPage';
import { LoginPage } from '../../pages/login/LoginPage';
import { Error404Page} from '../../pages/error404/Error404Page';


export function Routing() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user) {
    if (user.rol === 'admin') {
      return (
        <Routes>
          <Route path='/contacto' element={<ContactPage />} />
          <Route path='/quienesSomos' element={<AboutUsPage />} />
          <Route path='/login' element={<Navigate to="/admin" />} />
          <Route path='/' element={<Navigate to="/admin" />} />
          {/* <Route path='/admin' element={<TablaProductos />} />
          <Route path='/mainpage' element={<ProductoTablaUsuario />} />    REEMPLAZAR POR COMPONENTE USUARIO O SEA MAINPAGE */}
          {/* <Route path="*" element={< />} /> */}
        </Routes>
      );
    } else if (user.rol === 'usuario') {
      return (
        <Routes>
          <Route path='/contacto' element={<ContactPage />} />
          <Route path='/quienesSomos' element={<AboutUsPage />} />
          <Route path='/login' element={<Navigate to="/mainpage" />} />
          <Route path='/' element={<Navigate to="/mainpage" />} />
          {/* <Route path='/admin' element={<Navigate to="/mainpage" />} />       
          <Route path='/mainpage' element={<ProductoTablaUsuario />} />   REEMPLAZAR POR COMPONENTE USUARIO O SEA MAINPAGE */}
          <Route path="*" element={<Error404Page />} />
        </Routes>
      );
    }
  } else {
    return (
      <Routes>
        <Route path='/contacto' element={<ContactPage />} />
        <Route path='/quienesSomos' element={<AboutUsPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<LoginPage />} />
        <Route path='/admin' element={<Navigate to="/login" />} />
        <Route path='/mainpage' element={<Navigate to="/login" />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
    );
  }
};
