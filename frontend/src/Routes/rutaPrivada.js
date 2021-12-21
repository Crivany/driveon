//Dependencias
import React from 'react'
import { Navigate } from 'react-router-dom'

const RutaPrivada = ({isAuth, children})=> {
    return isAuth ? children : <Navigate to="/login" />
}
export default RutaPrivada;