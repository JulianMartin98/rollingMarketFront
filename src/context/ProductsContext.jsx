import { useEffect, useState, createContext } from 'react'
import axios from "axios"
import Swal from 'sweetalert2';

export const ProductsProvider = createContext()

const ProductsContext = ({ children }) => {

  const [productos, setProductos] = useState([])


  const obtenerProductos = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("https://rollingmarketback.onrender.com/api/product/"
        , {
          headers: {
            authorization: `${token}`,
          }
        });

      setProductos(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  const addProducto = async (producto) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post("https://rollingmarketback.onrender.com/api/product/create", producto
        , {
          headers: {
            authorization: `${token}`,
          }
        });

      setProductos([...productos, response.data])
      Swal.fire('¡Éxito!', 'El producto ha sido creado correctamente', 'success');
      obtenerProductos();
    } catch (error) {
      console.log(error)
      Swal.fire('¡Error!', 'Ha ocurrido un error al crear el producto', 'error');
    }
  }

  const getCategoria = async (category) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`https://rollingmarketback.onrender.com/api/product/category/${category}`

        , {
          headers: {
            authorization: `${token}`,
          }
        });
      setProductos(response.data);
    } catch (error) {
      console.error('Error al obtener productos por categoría:', error);
    }
  };

  const deleteProductos = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const confirmacion = await Swal.fire({
        title: '¿Estás seguro que desea eliminar el producto?',
        text: 'Esta acción no se puede deshacer',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
      });

      if (confirmacion.isConfirmed) {
        await axios.delete(`https://rollingmarketback.onrender.com/api/product/delete/${id}`
          , {
            headers: {
              authorization: `${token}`,
            }
          });
        setProductos(productos.filter(producto => producto._id !== id));
        Swal.fire('¡Eliminado!', 'El producto ha sido eliminado correctamente', 'success');
      }
    } catch (error) {
      console.log(error);
      Swal.fire('¡Error!', 'Ha ocurrido un error al eliminar el producto', 'error');
    }
  }

  const updateProductos = async (producto) => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(`https://rollingmarketback.onrender.com/api/product/update/${producto.id}`, producto
        , {
          headers: {
            authorization: `${token}`,
          }
        });
      await obtenerProductos()
      Swal.fire('¡Éxito!', 'El producto ha sido actualizado correctamente', 'success');
    } catch (error) {
      console.log(error)
      Swal.fire('¡Error!', 'Ha ocurrido un error al actualizar el producto', 'error');
    }
  }
  useEffect(() => {
    obtenerProductos()
  }, [])


  return (
    <ProductsProvider.Provider value={{ productos, addProducto, deleteProductos, updateProductos, getCategoria }}>
      {children}
    </ProductsProvider.Provider>
  )
};

export default ProductsContext;