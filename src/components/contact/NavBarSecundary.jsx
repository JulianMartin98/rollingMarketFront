import React from 'react';
import '../contact/Contact.css'


export function NavBarSecundary() {
  return (
    <>
      <div className='pieFotoContacto mt-0 mb-4 p-2 bg-body-secondary'>
        <a className='segundoNavContacto' href="#" variant='nav-underline'>Preguntas Frecuentes</a>
        <a className='segundoNavContacto' href="#">Sucursales y métodos de entrega</a>
        <a className='segundoNavContacto' href="#">Medios de Contacto</a>
        <a className='segundoNavContacto' href="#">Política de Privacidad</a>
      </div>
    </>
  );
};
