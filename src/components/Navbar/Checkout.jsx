import './NavBarComponent.css';
//import Swal from 'sweetalert2';
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { addCompra } from '../../firebase/firebase';
import { Link } from 'react-router-dom';


export default function Checkout() {
    const { cart, cartSum, cartEmpty } = useContext(CartContext);

    const[ordenId, setOrdenId]= useState(null);

    const[datosForm,setDatosForm] = useState({nombre:"",telefono:"",email:""});

    const handleComprar = (e) => {
        e.preventDefault();
    
        const compra={
            cliente: datosForm,
            productos: cart,
            date: new Date(),
            total: cartSum()
        }
        addCompra(compra).then(id =>setOrdenId(id));
        cartEmpty();
     
    }


    if (ordenId) {
        return(
            <div>
                <h2>Gracias por la compra</h2>
                <p>El número de orden es: {ordenId}</p>
            </div>
        )
    }             
        // return(
        //         Swal.fire({
        //         title:"Gracias por la compra",
        //         text:"El número de orden es: "+ordenId,
        //         icon:"success"
        //     })
        // )
                


    const handleDatos= (e) => {
        setDatosForm ({...datosForm,
            [e.target.name]: e.target.value
        })
        console.log(datosForm);
    }

// Formulario
    return(

    <article>
        <h1 className='titleForm'>Ingrese sus Datos para Finalizar Compra</h1>
        <form className='formStyle' onSubmit={handleComprar}>
            <input type="text" placeholder="Ingrese nombre completo"
            value={datosForm.nombre}
            onChange={handleDatos}
            name="nombre"
            />

            <input type="text" placeholder="Ingrese número de teléfono"
            value={datosForm.telefono}
            onChange={handleDatos}
            name="telefono"
            />

            <input id="email" type="email" placeholder="Ingrese su email" 
            value={datosForm.email}
            onChange={handleDatos}
            name="email"
            />

            <button type="submit" className='butonFormStyle'>Compar</button>
            </form>
        </article>
    )
}


