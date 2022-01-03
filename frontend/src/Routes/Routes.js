//Dependencias
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes as Switch, Route, Navigate } from "react-router-dom";
import Login from "../Components/Login/Login";
import ReactGa from 'react-ga'
import TagManager from 'react-gtm-module'
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from "react-redux";
//Componentes y funciones
import Home from "../Containers/Home/Home";
import { firebaseConfig } from '../Firebase/firebase'
import ScrollTop from "../helpers/scrolltop";
import RutaPublica from './rutaPublica'
import Registro from "../Components/Registro/Registro";
import Tienda from "../Components/Tienda/Tienda";
import Blog from "../Containers/Blog/Blog";
import Cookies from "../Components/terms/Cookies";
import Terminos from '../Components/terms/Terminos';
import Aviso from '../Components/terms/Aviso';
import Profesores from "../Components/Profesores/Profesores";
import { sesion } from "../redux/actions/sessionAction";
import RutaPrivada from "./rutaPrivada";
import Dashboard from "../Containers/Dashboard/pages/Dashboard";
import { getCarnetDescription, getPaq, getPermiso } from "../redux/actions/apiAction";


const Routes = ()=> {
    //Estados y Hooks
    const [isAuth, setIsAuth] = useState(false)
    const auth = getAuth()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(sesion(JSON.parse(localStorage.getItem('sesion'))))
        getPaq()
        getCarnetDescription()
        getPermiso()
    }, [])

    useEffect(() => {
        const app = initializeApp(firebaseConfig);
        //Sesión
        onAuthStateChanged(auth, async(usr)=> {
            if(usr?.uid){
                setIsAuth(true)
            }else{
                setIsAuth(false)
            }
        })
    }, [auth])

    useEffect(() => {
        //Google Analytics
        ReactGa.initialize('UA-213822087-1')
        ReactGa.pageview(window.location.pathname + window.location.search)

        //Google Tag Manager
        TagManager.initialize('GTM-PVPCDJX')
        TagManager.dataLayer({
            dataLayer: {
                event: "pageview",
                path: window.location.pathname + window.location.search
            }
        })
    }, [])
    //Funciones

    return(
        <Router>
            <ScrollTop>
                <Switch>
                    {/* Rutas que puede ver si no se ha matriculado o iniciado sesión */}
                    <Route path="/" element={<RutaPublica isAuth={isAuth}><Home /></RutaPublica>} />
                    <Route path="/tienda" element={<RutaPublica isAuth={isAuth}><Tienda /></RutaPublica>} />
                    <Route path="/blog" element={<RutaPublica isAuth={isAuth}><Blog /></RutaPublica>} />
                    <Route path="/cookies" element={<RutaPublica isAuth={isAuth}><Cookies /></RutaPublica>} />
                    <Route path="/terms" element={<RutaPublica isAuth={isAuth}><Terminos /></RutaPublica>} />
                    <Route path="/warning" element={<RutaPublica isAuth={isAuth}><Aviso /></RutaPublica>} />
                    <Route path="/profesores" element={<RutaPublica isAuth={isAuth}><Profesores /></RutaPublica>} />
                    <Route path="/login" element={<RutaPublica isAuth={isAuth}><Login /></RutaPublica>} />
                    <Route path="/registro" element={<RutaPublica isAuth={isAuth}><Registro /></RutaPublica>} />
                    {/* Rutas privadas que se puede entrar solo si se matriculo o inicio sesión */}
                    <Route path="/dashboard" element={<RutaPrivada isAuth={isAuth}><Dashboard /></RutaPrivada>} />
                    {/* Redireccionamiento cuando busquen una ruto que no exista */}
                    <Route path="*" element={<Navigate replace to ="/" />}/>
                </Switch>
            </ScrollTop>
        </Router>
    )
}
export default Routes;