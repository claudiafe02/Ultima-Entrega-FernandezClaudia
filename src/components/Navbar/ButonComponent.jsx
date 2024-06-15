import './ButonComponent.css';
import { Link } from 'react-router-dom';

export default function ButonComponent({nombre, color, camino}) {
    return <button style={{backgroundColor: color}} className="styleButon">
    <Link to={`${camino}`} style={{textDecoration:'none'}}>{nombre}</Link>
    </button>
}

