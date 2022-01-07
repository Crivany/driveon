//Dependencias
import React from "react";
import { AccountCircleOutlined, KeyboardArrowDown } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";
//Componentes y funciones

//Estilos
import "./styleNavbarHome.css"

const NavbarHome = ()=> {
    //Estados y Hooks
    const auth = getAuth()
    //Funciones
    const handleCerrarSesion = async()=> {
        await signOut(auth)
    }

    return(
        <div className="cont">
            <div className="cont-navbarHome">
                <Link to="/"><img src="https://res.cloudinary.com/dpkaiokho/image/upload/v1639912893/LOGO_DRIVE_ekonda.jpg" width="60px" alt="Logo DriveON" className="img-navbarHome-logo" /></Link>
                <ul className="cont-navbarHome-section">
                    <li className="li-navbarHome">
                        <Link to="/tienda" className="link-navbarHome">Teórico</Link>
                    </li>
                    <li className="li-navbarHome">
                        <Link to="/tienda" className="link-navbarHome">Practico</Link>
                    </li>
                    <li className="li-navbarHome">
                        <Link to="/profesores" className="link-navbarHome">Profesores/Autoescuela</Link>
                    </li>
                    <li className="li-navbarHome">
                        <Link to="/blog" className="link-navbarHome">Blog</Link>
                    </li>
                    <li className="li-navbarHome">
                        <Link to="/login" className="link-navbarHome">Aula <AccountCircleOutlined sx={{color: "#3C3C3B", fontSize: "30px"}} /></Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default NavbarHome;