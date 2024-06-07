import React from 'react';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import UsersContext from './context/UsersContext';
import ProductsContext from './context/ProductsContext';
import { Navigator } from './components/navBar/Navigator';
import Footer from './components/footer/Footer';
import { Routing } from './components/routes/Routing';


function App() {


  return (
    <>

      <UsersContext>
        <ProductsContext>
          <Navigator />
          <Routing/>
          <Footer />
        </ProductsContext>
      </UsersContext>

    </>
  )
}

export default App;
