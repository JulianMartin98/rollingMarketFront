import React from 'react';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import UsersContext from './context/UsersContext';
import { Navigator } from './components/navBar/Navigator';
import Footer from './components/footer/Footer';
import { Routing } from './components/routes/Routing';


function App() {


  return (
    <>

      <UsersContext>
        {/* <ProductosContext> */}
          <Navigator />
          <Routing/>
          <Footer />
        {/* </ProductosContext> */}
      </UsersContext>

    </>
  )
}

export default App;
