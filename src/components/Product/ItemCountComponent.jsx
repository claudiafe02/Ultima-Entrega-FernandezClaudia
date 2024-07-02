import './ItemCountComponent.css';
import { useContext, useState } from "react";
import { CartContext } from '../../context/CartContext';


export default function ItemCountComponent({item}) {
    const { handleAgregar,cartHidden }= useContext(CartContext);

    const [count, setCount]= useState(0);

    const handleInc= () =>{
        count<= item.stock-1 && setCount(count+1);
    }
    
    const handleDec= () =>{
        count>=1 && setCount(count-1);
    } 

    const handleAddCart= () =>{
        handleAgregar({item},count);

        const botonAgregar= document.getElementById('agregar');
        if (cartHidden === 'true'){
            botonAgregar.setAttribute("disabled", "");
        }else{botonAgregar.setAttribute("disabled", "false")}
    };   
         
    return (    
        <section>
            <div className="butonClicStyle">
                <button onClick={handleInc}>+</button>
                <p>{count}</p>
                <button onClick={handleDec}>-</button>
            </div>
            <div className="butonAddStyle">
                <button onClick={handleAddCart} id='agregar'>Agregar al Carrito
                </button>
            </div>
        </section>   
        
    )
}