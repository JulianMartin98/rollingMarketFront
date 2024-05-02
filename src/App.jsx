import React from 'react';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import UsersContext from './context/UsersContext';
import { Navigator } from './components/navBar/Navigator';
import Footer from './components/footer/Footer';

function App() {


  return (
    <>

      <UsersContext>
        {/* <ProductosContext> */}
          <Navigator />
          {/* <Rutas /> */}
          <Footer />
        {/* </ProductosContext> */}
      </UsersContext>

    </>
  )
}

export default App;
