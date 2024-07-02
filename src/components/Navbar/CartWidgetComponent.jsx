import './NavBarComponent.css';
import carrito from './carrito.jpg';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function CartWidgetComponent({camino}) {
  const { cartUpdate } = useContext(CartContext);
  
  return (
         <div className='barraCart'>
          <img style={{width: 30,height: 30,marginRight:'3%'}} src={carrito} alt="carrito de compras "/>

          <button style={{width: 30,height: 30,backgroundColor: 'white',color: 'black', border: '0'}}>
            <Link to={"/CartComponent"} style={{textDecoration:'none'}} >{cartUpdate()}</Link>
           </button>
        </div>
    )
}
