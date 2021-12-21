//Dependencias
import { LocalOffer, ElectricCar, Directions, CreditScore } from "@mui/icons-material";
import React from "react";
//Componentes y funciones

//Estilos
import './styleCurso.css'

const Cursos = ()=> {
    return(
        <div className="cont-curso">
            <h2 className="title-curso-h2">
                Los cursos más fáciles que encontrarás
            </h2>
            <div className="cont-curso-group">
                <div className="cont-curso-section">
                    <LocalOffer sx={{color: "#FFF", fontSize: "70px"}}  />
                    <h3 className="title-curso-h3">Descuento en el seguro</h3>
                    <p className="text-curso">
                    ¿Quiere ahorrar en su prima? Las compañías de seguros en 34 estados ofrecen descuentos de hasta el 10%.
                    </p>
                    <button className="btn-curso btn">Aprende Más</button>
                </div>
                <div className="cont-curso-section">
                    <ElectricCar sx={{color: "#FFF", fontSize: "70px"}} />
                    <h3 className="title-curso-h3">Conducción defensiva</h3>
                    <p className="text-curso">
                    ¿Necesita completar Conducción defensiva solicitada por el estado, una compañía de seguros o su empleador?
                    </p>
                    <button className="btn-curso btn">Aprende Más</button>
                </div>
                <div className="cont-curso-section">
                    <Directions sx={{color: "#FFF", fontSize: "70px"}} />
                    <h3 className="title-curso-h3">Escuela de tráfico</h3>
                    <p className="text-curso">
                    ¿Recibió una multa de tránsito y necesita completar la escuela de tránsito para reportarlo a la corte, al DMV oa su proveedor de seguros?
                    </p>
                    <button className="btn-curso btn">Aprende Más</button>
                </div>
                <div className="cont-curso-section">
                    <CreditScore sx={{color: "#FFF", fontSize: "70px"}} />
                    <h3 className="title-curso-h3">Ed del conductor</h3>
                    <p className="text-curso">
                    Comience con su permiso de aprendizaje y licencia de conducir. Lo guiaremos a través del proceso para que pueda concentrarse en el camino.
                    </p>
                    <button className="btn-curso btn">Aprende Más</button>
                </div>
            </div>
        </div>
    )
}
export default Cursos;