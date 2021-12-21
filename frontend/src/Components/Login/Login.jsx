//Dependencias
import React from 'react';
import { Facebook, Google } from '@mui/icons-material';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup'
//Componentes y funciones
import NavbarHome from '../Navigation/NavbarHome/NavbarHome';
import { authFacebook, authGoogle, LoginEmailPass } from '../../redux/actions/sessionAction';
import Footer from '../footer/Footer';
//Estilos
import './styleLogin.css'

const Login = ()=> {
    //Estados y Hooks
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            email: '',
            pass: ''
        },
        onSubmit: async data => {
            dispatch(LoginEmailPass(data))
        },
        validationSchema: yup.object({
            email: yup.string(). required(),
            pass: yup.string().required()
        })
    })
    //Funciones
    const handlerGoogle = ()=> {
        dispatch(authGoogle())
    }
    const handleFacebook = ()=> {
        dispatch(authFacebook())
    }

    return(
        <>
        <NavbarHome />
        <div className="cont-login">
            <h1 className="title-login">Iniciar Sesión</h1>
            <div className="cont-redes">
                <button onClick={handlerGoogle} className="btn-login-redes google btn">Iniciar con Google <Google sx={{fontSize: "20px"}} /></button>
                <button onClick={handleFacebook} className="btn-login-redes facebook btn">Iniciar con Facebook <Facebook sx={{fontSize: "20px"}} /></button>
            </div>
            <hr style={{marginTop: "15px"}} />
            <form onSubmit={formik.handleSubmit} className="from-login">
                <label htmlFor="email" className="label-login email">Email:</label>
                <input
                type="email"
                id="email"
                name="email"
                onChange={formik.handleChange}
                className="input-login email"
                required />
                <label htmlFor="pass" className="label-login pass">Contraseña:</label>
                <input
                type="password"
                id="pass"
                name="pass"
                onChange={formik.handleChange}
                className="input-login pass"
                required />
                <Link to="/login" className="link-login">¿Has olvidado tu contraseña?</Link>
                <button type="submit" className="btn-login btn">Iniciar Sesion</button>
                <Link to="/registro" className="link-login reg">¿Aún no tienes cuenta?, Registrate</Link>
            </form>
        </div>
        <Footer />
        </>
    )
}
export default Login;