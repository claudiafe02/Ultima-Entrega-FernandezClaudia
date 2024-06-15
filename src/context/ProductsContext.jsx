import { createContext, useEffect, useState } from "react";
import { getProducts } from "../firebase/firebase";

export const ProductsContext = createContext([]);

export default function ProductsProvider({children}) {
    const[products,setProducts]= useState([]);

    function bringProducts() {
        return getProducts().then((datos) => setProducts(datos)); 
    } 
    
    useEffect(() => {
        let ignore= false;

        //bringProducts();

        !ignore && bringProducts() ;
        return() =>{
            ignore= true;
        }

    },[])    
    
    return(
        <ProductsContext.Provider value={[products,setProducts,bringProducts]}>
            {children}
        </ProductsContext.Provider>
    ); 
}

