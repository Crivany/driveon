//Dependencias
import React from 'react';
import { Link } from "react-router-dom"
//Componentes y funciones

//Estilos
import './styleInicio.css'

const Inicio = ()=>  {
    return(
        <div className="cont-inicio">
            <h1 className="title-inicio">Cada curso de conducción que necesito en un solo lugar</h1>
            <p className="text-inicio">
                Confiado en todo el país por DMV, seguros empresas y tribunales
            </p>
            <div className="cont-inicio-gadwed">
                <h3 className="title-inicio-gad">¡Encuentra el curso adecuado para tí!</h3>
                <div>
                    <button className="btn-inicio btn"><Link to="/tienda">Cursos Teóricos</Link></button>
                    <button className="btn-inicio btn"><Link to="/tienda">Cursos Practicos</Link></button>
                </div>
            </div>
        </div>
    )
}
export default Inicio;