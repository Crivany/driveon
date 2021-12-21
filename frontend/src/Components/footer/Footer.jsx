//Dependencias
import React from 'react'
import { Link } from 'react-router-dom'
//Componentes y funciones
import { ScrolltoTop } from '../scroll/ScrollToTop'
//Estilos
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
        <div className="grupo-1">
            <div className="box">
                <figure>
                    <img src="https://res.cloudinary.com/dpkaiokho/image/upload/v1639912893/LOGO_DRIVE_ekonda.jpg"/>
                </figure>
            </div>
            <div className="box">
                <h2>MENÚ</h2>
                <p><Link to="/tienda">Teórico</Link></p>
                <p><Link to="/tienda">Práctico</Link></p>
                <p><Link to="/profesores">Profesores/Autoescuela</Link></p>
                <p><Link to="/blog">Blog</Link></p>
            </div>
            <div className="box">
                <h2>SIGUENOS</h2>
                <div className="red-social">
                    <a href="#" className="fab fa-facebook"></a>
                    <a href="#" className="fab fa-instagram"></a>
                    <a href="#" className="fab fa-twitter"></a>
                    <a href="#" className="fab fa-linkedin"></a>
                </div>
                <div>
                    <a href="mailto:info@autoescueladriveon.com"><p>Contacto: <span>info@autoescueladriveon.com</span></p></a>
                    <a href="tel:+34623364842"><p>Teléfono: <span>+34 623364842</span></p></a>
                </div>
            </div>
            <div className="box">
                    <Link to="/cookies"><p>Política de Cookies</p></Link>
                    <Link to="/terms"><p>Terminos y Condiciones</p></Link>
                    <Link to="/warning"><p>Aviso Legal</p></Link>
                </div>
        </div>
        <div className="grupo-2">
            <small>&copy; 2021 <b>DriveON</b> - Todos Los Derechos Reservados.</small>
            <ScrolltoTop />
        </div>
    </footer>
    )
}

export default Footer

