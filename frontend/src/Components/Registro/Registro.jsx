//Dependencias
import React from 'react';
import { Facebook, Google } from '@mui/icons-material';
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
//Componentes y funciones
import Footer from '../footer/Footer';
import NavbarHome from '../Navigation/NavbarHome/NavbarHome';
import { RegistroEmailPass, authGoogle, authFacebook } from '../../redux/actions/sessionAction';
//Estilos
import './styleRegistro.css'

const Registro = ()=> {
    //Estados y Hooks
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues:{
            nombre: '',
            email: '',
            tel: '',
            pass: '',
            passR: ''
        },
        onSubmit: async(data)=> {
            dispatch(RegistroEmailPass(data))
        },
        validationSchema: Yup.object({
            nombre: Yup.string().required().min(3),
            email: Yup.string().required(),
            tel: Yup.number().required().min(10, 'Debe ingresar un numero valido'),
            pass: Yup.string().required().min(7, 'Contraseña insegura - minimo 7 caracteres'),
            passR: Yup.string().required().oneOf([Yup.ref('pass'), null], 'Passwords must match')
            //Falta avisar cuando la contraseña no coincide
        })
    })
    //Funciones
    const handleGoogle = ()=> {
        dispatch(authGoogle())
    }
    const handleFacebook = ()=> {
        dispatch(authFacebook())
    }

    return(
        <>
            <NavbarHome />
            <div className="cont-registro">
                <div className="cont-registro-form">
                    <h1 className="title-registro">Registro</h1>
                    <form onSubmit={formik.handleSubmit} className="form-registro">
                        <label className="label-registro" htmlFor="nombres">Nombre Completo:</label>
                        <input
                        className="input-registo"
                        type="text" 
                        id="nombre"
                        name="nombre"
                        onChange={formik.handleChange}
                        minLength={3}
                        required />
                        <label className="label-registro" htmlFor="email">Correo Electronico:</label>
                        <input
                        className="input-registo"
                        type="email"
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        required />
                        <label className="label-registro" htmlFor="tel">Teléfono:</label>
                        <input
                        className="input-registo"
                        type="tel"
                        id="tel"
                        name="tel"
                        onChange={formik.handleChange}
                        minLength={10}
                        required />
                        <label className="label-registro" htmlFor="pass">Contaseña:</label>
                        <input
                        className="input-registo"
                        type="password"
                        id="pass"
                        name="pass"
                        onChange={formik.handleChange}
                        minLength={7}
                        required />
                        <label className="label-registro" htmlFor="passR">Repite la Contaseña:</label>
                        <input
                        className="input-registo"
                        type="password"
                        id="passR"
                        name="passR"
                        onChange={formik.handleChange}
                        minLength={7}
                        required />
                        <div>
                        <input type="checkbox" required  /> <span>He leído y acepto el <Link to="/aviso_legal"><strong>Aviso Legal</strong></Link></span>
                        </div>
                        <button type="submit" className="btn-login redes btn">Registrarme</button>
                    </form>
                </div>
                <div className="cont-registro-line">
                <hr className="line" />
                O
                <hr className="line" />
                </div>
                <div className="cont-registro-redes">
                    <button onClick={handleGoogle} className="btn-login-redes google rg btn">Registro con Google <Google sx={{fontSize: "20px"}} /></button>
                    <button onClick={handleFacebook} className="btn-login-redes facebook rg btn">Registro con Facebook <Facebook sx={{fontSize: "20px"}} /></button>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Registro;