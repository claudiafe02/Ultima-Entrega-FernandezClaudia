import './ItemDetail.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemCountComponent from "./ItemCountComponent";
import { db } from '../../firebase/firebase';
import { doc, getDoc } from "firebase/firestore";
// import { CartContext } from '../../context/CartContext';
// import { useContext } from "react";


export function ItemDetail() {
    const [item,setItem] = useState({});
    const { prodId } = useParams();
    // const { handleAgregar }= useContext(CartContext);

    
    useEffect(() =>{

        const producto= doc(db,'products',prodId);
        getDoc(producto)
            .then((dato) => {
            setItem(
            { id:dato.id, ...dato.data() }
            )
        });

    }, [prodId]);

    return(
        <>
        <section className='detailsection'>
            <h2>Detalles</h2>
            <img className= 'image' src={item.image} alt={item.title} />
                <p>Descripcion: {item.subtitle}</p>
                <p>Categoria: {item.category}</p>
                <p>Precio: $ {item.price}</p>
                <p>Cantidad en existencia: {item.stock}</p>
            <div>
                <ItemCountComponent 
                item={item}
                // title={item.title}
                // price= {item.price}
                // stock={item.stock}
                // id={item.id}
                />
            </div>
        </section>
        </>
    )

}