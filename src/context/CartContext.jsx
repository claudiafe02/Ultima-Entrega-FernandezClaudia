import { createContext, useEffect, useState } from "react";
//import { json } from "react-router-dom";

// const cartInit = JSON.parse(localStorage.getItem("cart")) || [];

export const CartContext = createContext([]);

export default function CartProvider({children}) {
    const[cart,setCart]= useState([]);
    
    const handleAgregar= ({item},count) =>{   
        const cartNow = [...cart];

        const newProd= {...item,count}

        const prodFind = cartNow.find((producto) =>producto.id === item.id);

        if (prodFind != undefined ) {
            prodFind.count += count
            setCart(cartNow);
        }else {  
            setCart(cartNow.push({newProd}));
        } 
    } 
    const cartUpdate = () =>{ 
        return cart.reduce((acum,prod) => acum + prod.count, 0);
    }
    const cartSum = () =>{ 
        return cart.reduce((acum,prod) => acum + prod.count * prod.price, 0);
    }
    const cartEmpty = () =>{ 
        return setCart([]);
    }

    // useEffect(() => {
    //    localStorage.setItem("cart",JSON.stringify(cart));        
    // }, [cart]);
    
    return (
        <CartContext.Provider value={{cart,setCart, handleAgregar, cartUpdate, cartSum, cartEmpty}}>
            {children}
        </CartContext.Provider>
    ); 
}