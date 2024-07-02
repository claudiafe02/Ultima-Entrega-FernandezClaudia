import './CartComponent.css';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';

export default function CartComponent() {
    const { cart, cartSum, cartEmpty, cartItemDelete } = useContext(CartContext);

    const handleVaciar= ()=> {
        return cartEmpty();
    }


    return (
        <>
            <article>
                <h1>Productos Cargados</h1>
                    {cart.map((dato) =>(
                        
                    <div key={dato.id}>
                        <h3>{dato.title}</h3>
                        <p>Precio Unitario: $ {dato.price}</p>
                        <p>Cantidad: {dato.count}</p>
                        <p>Precio Total: $ {dato.price * dato.count}</p>

                        <button onClick= {()=>{cartItemDelete(dato.id)}} className='butonStyleDel'>Eliminar Producto</button>

                    </div>
                ))}

            </article>

            <div>
                <h2>Precio Final: $ { cartSum() } </h2>
                <button className='butonStyle' >
                  <Link to={`/CartComponent/Checkout`} style={{textDecoration:'none'}}>Finalizar Compra
                  </Link>
                </button>
                <button onClick={handleVaciar}  className='butonStyle'>Vaciar carrito</button>
            </div>
           
        </>
    )
}


    
    
    