//Dependencias
import React from 'react'
import { Navigate } from 'react-router-dom'

const RutaPublica = ({isAuth, children})=> {
    return !isAuth ? children : <Navigate to="/auth/dashboard" />
}
export default RutaPublica;