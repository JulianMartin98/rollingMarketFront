import React from "react";
import { Button } from "react-bootstrap";

const AddProductButton = ({ handleAgregarProducto }) => {
  return (
    <div>
      <h2 className="titulo-admin">Administrar Productos</h2>
      <Button
        className="button-add-modal"
        onClick={handleAgregarProducto}
      >
        Agregar Producto
      </Button>
    </div>
  );
};

export default AddProductButton;
