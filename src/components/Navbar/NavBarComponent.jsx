import './NavBarComponent.css';
import ButonComponent from "./ButonComponent";
import carrito from './carrito.jpg';
import CartWidgetComponent from "./CartWidgetComponent";
import { Link } from 'react-router-dom';

export default function NavBarComponent() {


    return (
        <header className="barraStyle">
            <button className="nombreTienda">
            <Link to={"/"} style={{ textDecoration: 'none'}}>Librería del Desarrollador</Link>
            </button>          
             <nav className='barraButons'> 
                <ButonComponent nombre="Desarrollo" color="yellow" camino="/Desarrollo"/>
                 <ButonComponent nombre="Datos" color="orange" camino="/Datos"/>
                <ButonComponent nombre="Diseño" color="lightgreen" camino="/Diseño"/> 
            </nav> 
            <div className='barraButons'> 
                <CartWidgetComponent />           
            </div>
        </header>
    )
}