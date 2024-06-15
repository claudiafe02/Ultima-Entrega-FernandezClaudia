import { useContext, useState } from "react";
import './ItemCountComponent.css';
import { CartContext } from '../../context/CartContext';


export default function ItemCountComponent({item}) {
    const { handleAgregar }= useContext(CartContext);

    const [count, setCount]= useState(0);

    const handleInc= () =>{
        count<= item.stock-1 && setCount(count+1);
    }
    
    const handleDec= () =>{
        count>=1 && setCount(count-1);
    } 

    return (    
        <section>
            <div className="butonClicStyle">
                <button onClick={handleInc}>+</button>
                <p>{count}</p>
                <button onClick={handleDec}>-</button>
            </div>
            <div className="butonAddStyle">
            <button onClick={()=>{handleAgregar({item},count)}} >Agregar al carrito
            </button>
            </div>
        </section>   
        
    )
}