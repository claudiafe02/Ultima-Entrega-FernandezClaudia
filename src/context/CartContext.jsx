import { createContext, useEffect, useState } from "react";
import Swal from 'sweetalert2';

export const CartContext = createContext([]);

export default function CartProvider({children}) {
    const[cart,setCart]= useState([]);
    const[cartHidden,setCartHidden]= useState(false);
    
    const handleAgregar= ({item},count) =>{   
        
        const indProdFind = cart.findIndex((producto) =>producto.id === item.id);

        if (indProdFind !== -1 ) {
            const cartNow = [...cart];
            cartNow[indProdFind].count += count
            setCart(cartNow);
        }else {  
            setCart([...cart,{...item,count}]);
        } 
        setCartHidden(true);
        Swal.fire({
            title:"Producto agregado al carrito",
            icon:"success"
        });
    } 
    const cartUpdate = () =>{ 
        const valini= 0;
        return cart.reduce((acum,prod) => acum + prod.count, valini);
    }
    const cartSum = () =>{ 
        const valini= 0
        return cart.reduce((acum,prod) => acum + prod.count * prod.price, valini);
    }
    const cartEmpty = () =>{ 
        return setCart([]);
    }

    const cartItemDelete = (id) => { 
        const indProdFind = cart.findIndex((producto) =>producto.id === id);
        const cartNow = [...cart];
        const cartMod= cartNow.splice(indProdFind,1)
    
        return setCart(cartNow);
    }

    return (
        <CartContext.Provider value={{cart,setCart, handleAgregar, cartUpdate, cartSum, cartEmpty, cartItemDelete,cartHidden}}>
            {children}
        </CartContext.Provider>
    ); 
}