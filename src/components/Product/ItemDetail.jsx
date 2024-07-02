import './ItemDetail.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemCountComponent from "./ItemCountComponent";
import { db } from '../../firebase/firebase';
import { doc, getDoc } from "firebase/firestore";


export function ItemDetail() {
    const [item,setItem] = useState({});
    const { prodId } = useParams();
           
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
            <h2 className='subtith2'>Detalles</h2>
            <img className= 'image' src={item.image} alt={item.title} />
                <p>Descripcion: {item.subtitle}</p>
                <p>Categoria: {item.category}</p>
                <p>Precio: $ {item.price}</p>
                <p>Cantidad en existencia: {item.stock}</p>
            <div>
                <ItemCountComponent 
                item={item}
                />
            </div>
        </section>
        </>
    )

}