import './NavBarComponent.css';
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { collection,addDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

export default function Checkout() {
    const { cart, cartSum, cartEmpty } = useContext(CartContext);

    const[ordenId,setOrdenId]= useState("");

    const[datosForm,setDatosForm] = useState({nombre:"",email:""});

    const handleComprar = (e) => {
        e.preventDefault();
        const datos={
            cliente: datosForm,
            productos: cart,
            total: cartSum()
        }
        const comprasRef= (db, "compras");
        addDoc(comprasRef,datos)
        .then((orden) =>{
            setOrdenId(orden.id);
            cartEmpty();
        })
    }

    if (ordenId) {
        return(
            <div>
                <h1>Gracias por la compra</h1>
                <p>El N° de orden de pedido: {ordenId}</p>
            </div>
        )
    }

    const handleDatos= (e) => {
        setDatosForm ({...datosForm,
            [e.target.name]: e.target.value
        }) 
    }
// Formulario
    return(

    <article>
        <h1 className='titleForm'>Finalizar Compra</h1>
        <form onSubmit={handleComprar} className='formStyle'>
            <input type="text" placeholder="Ingrese nombre completo"
            value={datosForm.nombre}
            onChange={handleDatos}
            name="nombre"
            />
            <input type="email" placeholder="Ingrese su email" 
            value={datosForm.email}
            onChange={handleDatos}
            name="email"
            />
            </form>
            <button type="submit" className='butonFormStyle'>Comprar</button>
    </article>
    )
}