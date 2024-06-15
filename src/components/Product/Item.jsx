import './Item.css';
import { Link } from 'react-router-dom';

export default function Item ({ image,title,price,id }) {

    return(
        <article className= 'styleProduct'>
            <img className= 'image' src={image} alt={title} />
            <div className='titleButonStyle'>
                <h3>{title}</h3>
                <p>Precio {price}</p>
                <button className='butondetails'>
                <Link to={`/Item/${id}`} style={{textDecoration:'none'}}>Ver Detalles</Link>
                </button>
            </div>
        </article>
    )
}
