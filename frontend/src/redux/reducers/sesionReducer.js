//Componentes
import { sesionUsr } from '../types/types'

const sesionReducer = (state = {}, action)=> {
    switch (action.type) {
        //Registro con email
        case sesionUsr.registro:
            localStorage.setItem('sesion', JSON.stringify(action.payload))
            return action.payload;
        //Inicio con email
        case sesionUsr.inicio:
            localStorage.setItem('sesion', JSON.stringify(action.payload))
            return action.payload;
        //Registro/Login Redes
        case sesionUsr.redes:
            localStorage.setItem('sesion', JSON.stringify(action.payload))
            return action.payload;
        //Reload Page
        case sesionUsr.sesion:
            return action.payload
        //Cerrar Sesion
        case sesionUsr.cerrar:
            localStorage.setItem('sesion', JSON.stringify([]))
            return state;
        default:
            return state;
    }
}
export default sesionReducer;