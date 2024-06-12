import Dropdown from 'react-bootstrap/Dropdown';
import { useContext } from 'react';
import { ProductsProvider } from '../../../context/ProductsContext';

function ProductsCategoryDropdown() {
  const { getCategoria } = useContext(ProductsProvider);

  const handleCategorySelect = (categoria) => {
    getCategoria(categoria);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="danger m-2 p-2" id="dropdown-basic">
        Buscar por Categoría
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleCategorySelect('Bebidas')}>
          Bebidas
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCategorySelect('Golosinas')}>
          Golosinas
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCategorySelect('Limpieza')}>
          Limpieza
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCategorySelect('Lacteos')}>
          Lácteos
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCategorySelect('Otros')}>
          Otros
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={() => handleCategorySelect('Todos')}>
          Todos
        </Dropdown.Item>


      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ProductsCategoryDropdown;