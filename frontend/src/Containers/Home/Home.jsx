//Dependencias
import React from "react";
import Footer from "../../Components/footer/Footer";
import CookieConsent from "react-cookie-consent";
import { Link } from "react-router-dom";
//Componentes y funciones
import NavbarHome from "../../Components/Navigation/NavbarHome/NavbarHome";
import Inicio from "../../Components/Inicio/Inicio";
import Cursos from "../../Components/Cursos/Cursos";
import HomeComponent from "../../Components/HomeComponent/HomeComponent";


const Home = ({isAuth})=> {
    return (
        <>  
            <NavbarHome isAuth={isAuth} />
            <div className="cont-background">
            <Inicio />
            </div>
            <Cursos />
            <HomeComponent />
            <Footer/>
            <CookieConsent
            location="bottom"
            style={{fontSize: "14px"}}
            buttonText="Ok entiendo"
            >
            Utilizamos cookies propias y de terceros para mejorar la experiencia del usuario a través de su navegación. Si continúas navegando aceptas su uso. <Link to="/policy_cookies">Política de cookies</Link>
            </CookieConsent>
        </>
    )
}
export default Home;