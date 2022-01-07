//Dependencias
import React from 'react';
import { Link } from "react-router-dom"
//Componentes y funciones

//Estilos
import './styleInicio.css'

const Inicio = ()=>  {
    return(
        <div className="cont-inicio">
            <button className="btn-inicio btn"><Link to="/tienda">Cursos Teóricos</Link></button>
            <button className="btn-inicio btn"><Link to="/tienda">Cursos Practicos</Link></button>
        </div>
    )
}
export default Inicio;