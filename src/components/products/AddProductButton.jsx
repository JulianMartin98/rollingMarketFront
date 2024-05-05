import React from "react";
import { Button } from "react-bootstrap";

const AddProductButton = ({ handleAgregarProducto }) => {
  return (
    <div className="boton-agregar-producto-padre">
      <h2 className="titulo-admin">Administrar Productos</h2>
      <Button
        className="boton-agregar-producto"
        onClick={handleAgregarProducto}
      >
        Agregar Producto
      </Button>
    </div>
  );
};

export default AddProductButton;
