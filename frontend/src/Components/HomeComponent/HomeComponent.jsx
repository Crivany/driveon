import React from 'react'
import './StyleHomeComponent.css'

const HomeComponent = () => {
    return (
        <div>
            <div className="fragmento">
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsum molestiae minus aliquam autem commodi consectetur sed quidem, officiis neque totam molestias nam id eius.</p>
            <div className="fragmento-2">
                <div className="box"><i className="icon fa-solid fa-file-signature"></i><p>APROBADO A ESCALA NACIONAL</p></div>
                <div className="box"><i className="icon fa-solid fa-piggy-bank"></i><p>DEVOLUCIÓN DE DINERO, NO PREGUNTAS HECHAS</p></div>
                <div className="box"><i className="icon fa-solid fa-mobile-screen-button"></i><p>100% EN LÍNEA, CUALQUIER DISPOSITIVO</p></div>
                <div className="box"><i className="icon fa-solid fa-toolbox"></i><p>DEDICADO 24/7 ATENCIÓN AL CLIENTE</p></div>
            </div>
            </div>
            
        </div>
    )
}

export default HomeComponent
