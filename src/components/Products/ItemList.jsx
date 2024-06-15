import './ItemList.css';
import { useEffect, useState } from "react";
import Item from "../Product/Item";
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/firebase';
import { collection, getDocs, query, where } from "firebase/firestore";

export default function ItemList() {
    const [items,setItems] = useState([]);
    const category = useParams().prodCategory;

    useEffect(() => {
        const productos= collection(db,'products');
            
        let consulta=''
        if (category) {
            consulta = query(productos, where('category','==',category));
        } else {
            consulta= productos;
        }
        
        getDocs(consulta)
        .then((item) => {            
            setItems(
                item.docs.map((prod) =>{
                    return { id:prod.id, ...prod.data() }
                })
            )
        })
    },[category]);

    return(
        <>
            <section className="sectionStyle" >
                {items.map((dato) => ( 
                    <Item key={dato.id}  
                    image= {dato.image}
                    title={dato.title}
                    price= {dato.price}
                    id={dato.id}
                    category={dato.category}
                    subtitle={dato.subtitle}
                    amount={dato.stock}
                    />                 
                ))}
            </section>
        </>
    )
};

