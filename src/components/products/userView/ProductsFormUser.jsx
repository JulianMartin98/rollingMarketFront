import { useContext, useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap';
import { ProductsProvider } from '../../../context/ProductsContext';

import Swal from 'sweetalert2';

const ProductsFormUser = ({ editarProductos, handleClose }) => {

    const { updateProductos } = useContext(ProductsProvider)

    const [producto, setProducto] = useState({
        id: editarProductos ? editarProductos._id : (null),
        name: editarProductos ? editarProductos.name : "",
        description: editarProductos ? editarProductos.description : "",
        category: editarProductos ? editarProductos.category : "",
        price: editarProductos ? editarProductos.price : "",
        stock: editarProductos ? editarProductos.stock : "",
        image: editarProductos ? editarProductos.image : ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto(prevProducto => ({
            ...prevProducto,
            [name]: value
        }));
    }

    //Helper validador de link de la imagen
    const isImageUrlValid = (url) => {
        const imageUrlPattern = /\.(jpeg|jpg|gif|png|bmp)$/i; // Extensiones de imágenes admitidas
        const webUrlPattern = /^(https?:\/\/)?[^\s\/$.?#].[^\s]*$/i;
        return imageUrlPattern.test(url) && webUrlPattern.test(url);
    };


    const handleSubmit = (e) => {
        e.preventDefault()

        // verificación del campo imagen que no este vacío o que no sea invalido
        if (!producto.image || !isImageUrlValid(producto.image)) {
            // asignar un enlace por defecto si no es valido o esta vacío el campo
            producto.image = "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg";
        }

        updateProductos(producto)
        handleClose()
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Producto Editado",
            showConfirmButton: false,
            timer: 1500,
        });

        // Restablecer el estado del producto
        setProducto({
            id: "",
            name: "",
            description: "",
            category: "",
            price: "",
            stock: "",
            image: ""
        });
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-1" >
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text"
                        value={producto.name}
                        readOnly
                        name='name'
                        className="readonly-field" 
                    />
                </Form.Group>
                <Form.Group className="mb-1">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Control
                        value={producto.category}
                        readOnly
                        name="category"
                        className="readonly-field" 
                    >
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-1" >
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control type="text"
                        value={producto.description}
                        readOnly
                        name='description'
                        className="readonly-field"
                    />
                </Form.Group>
                <Form.Group className="mb-1" >
                    <Form.Label>Stock</Form.Label>
                    <Form.Control type="number"
                        value={producto.stock}
                        onChange={handleChange}
                        name='stock'
                        required
                        min={0}
                        step={1}
                        max={500}
                        placeholder="Stock del Producto" />
                </Form.Group>
                <Form.Group className="mb-1" >
                    <Form.Label>Precio</Form.Label>
                    <InputGroup>
                        <InputGroup.Text>$</InputGroup.Text>
                        <Form.Control type="number"
                            value={producto.price}
                            readOnly
                            name='price'
                            className="readonly-field"
                        />
                    </InputGroup>
                </Form.Group>
                <Form.Group className="mb-1" >
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="text"
                        value={producto.image}
                        readOnly
                        name='image'
                        className="readonly-field" />
                    <Form.Text className="form-text" id="basic-addon4">
                        Debe ingresar el link de una imagen válida.
                    </Form.Text>
                </Form.Group>

                <div>
                    <Button type="submit" variant="link" className='button-add-modal'>
                        Editar Producto
                    </Button>
                </div>
            </Form>
        </>
    )
}

export default ProductsFormUser
