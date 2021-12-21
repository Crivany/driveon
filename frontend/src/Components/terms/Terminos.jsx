//Dependencias
import React from 'react';
//Componentes y funciones
import Footer from '../footer/Footer';
import NavbarHome from '../Navigation/NavbarHome/NavbarHome';
//Estilos
import './terms.css'

const Terms = () => {
    //Estados y Hooks

    //Funciones

    return (
        <>
            <NavbarHome />
            <div className="cont-terms">
                <div className="cont-terms-contend">
                    <h1 className="title-terms">Política de Privacidad</h1>
                    <p className="text-terms">
                        DRIVE SAFE ACADEMY S.L, informa a los interesados que sus datos serán utilizados
                        atendiendo a las limitaciones, derechos y obligaciones que establece el Reglamento
                        (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016, relativo
                        a la protección de las personas físicas en lo que respecta al tratamiento de datos
                        personales y a la libre circulación de estos datos, denominado Reglamento General
                        de Protección de Datos, (en lo sucesivo RGPD), y para dar cumplimiento a lo establecido
                        en el artículo 13 del RGPD se informa de que el RESPONSABLE DEL TRATAMIENTO DRIVE SAFE
                        ACADEMY S.L en la Calle Torrelaguna 35, Azuqueca de Henares, Guadalajara, Castilla la
                        Mancha, C.P. 19200.Madrid Tel +34 623 36 48 42 rgpd@autoescueladriveon.com
                    </p>
                    <h2 className="title-terms-title">FINALIDAD DEL TRATAMIENTO DE DATOS</h2>
                    <p className="text-terms">
                        Los datos facilitados por los interesados se utilizarán para las finalidades legítimas
                        previstas por DRIVE SAFE ACADEMY S.L,, y que se concretan en las siguientes:
                    </p>
                    <ul className="ul-terms">
                        <li className="list-terms">
                            Contactar con el interesado para dar respuesta a sus solicitudes, peticiones
                            o consultas.
                        </li>
                        <li className="list-terms">
                            Gestión de la administración contable, facturación y cobro
                            de los servicios contratados.
                        </li>
                        <li className="list-terms">
                            Gestión de la información proporcionada por el interesado
                            para ofrecerle productos y servicios de un modo personalizado.
                        </li>
                        <li className="list-terms">
                            Contactar y ofrecer al interesado información de carácter comercial
                            y publicitario sobre ofertas, servicios que puedan ser de su interés,
                            análogos o similares a los solicitados.
                        </li>
                    </ul>
                    <h2 className="title-terms-title">LEGITIMACIÓN PARA EL TRATAMIENTO DE DATOS</h2>
                    <p className="text-terms">
                        La base legal para el tratamiento de los datos de interesados de las finalidades 1 a 4
                        es la ejecución de la relación contractual correspondiente, y atender las solicitudes
                        del titular de los datos libremente realizada e informada y conforme al consentimiento
                        prestado. Como base de legitimación para el envío de comunicaciones comerciales a
                        interesados que no sean clientes es el consentimiento obtenido de forma expresa e
                        inequívoca. En todo caso tiene derecho a oponerse al tratamiento de sus datos, de
                        conformidad con lo descrito en esta Política.
                    </p>
                    <h2 className="title-terms-title">DESTINATARIOS Y COMUNICACIÓN DE DATOS</h2>
                    <p className="text-terms">
                        Los datos de los interesados no serán cedidos a terceros. En su caso, los datos podrán
                        ser comunicados únicamente a las Administraciones Públicas y en los casos previstos por
                        las Leyes que sean de aplicación.
                    </p>
                    <h2 className="title-terms-title">DURACIÓN DEL TRATAMIENTO DE DATOS</h2>
                    <p className="text terms">
                        Los datos para la gestión de la relación con los clientes, facturación, cobros, etc.
                        serán conservados durante todo el tiempo en que el contrato esté vigente. Finalizada
                        la relación contractual, los datos deberán ser conservados durante el tiempo exigido
                        por la legislación aplicable y hasta que prescriban las eventuales responsabilidades
                        derivadas del contrato. Los datos para el envío de comunicaciones comerciales,
                        elaboración de perfiles comerciales y de servicios serán conservados indefinidamente
                        hasta que, en su caso, se manifieste la voluntad de supresión.
                    </p>
                    <h2 className="title-terms-title">DERECHOS DE LOS INTERESADOS</h2>
                    <p className="text terms">
                        LA EMPRESA garantiza a los interesados el ejercicio de los siguientes derechos:
                    </p>
                    <ul className="ul-terms final">
                        <li className="list-terms">
                            Acceso y rectificación: derecho a obtener confirmación sobre si estamos sus
                            tratando datos personales y a acceder a sus datos personales, así como a solicitar
                            la rectificación de los datos inexactos.
                        </li>
                        <li className="list-terms">
                            Supresión: solicitar su supresión cuando, entre otros motivos, los datos ya no
                            sean necesarios para las finalidades para los que fueron recogidos.
                        </li>
                        <li className="list-terms">
                            Limitación del tratamiento: los interesados podrán solicitar la limitación del
                            tratamiento de sus datos o su portabilidad, en cuyo caso únicamente los conservaremos
                            para el ejercicio o la defensa de reclamaciones.
                        </li>
                        <li className="list-terms">
                            Oposición: los interesados podrán oponerse al tratamiento de sus datos en
                            determinadas situaciones previstas en el RGPD. En estos supuestos dejaremos de
                            tratar los datos o, en su caso, dejaremos de hacerlo para esa finalidad en
                            concreto, salvo por motivos legítimos o el ejercicio o la defensa de posibles
                            reclamaciones.
                        </li>
                        <li className="list-terms">
                            Portabilidad: puede solicitar la descarga de sus datos personales para su
                            portabilidad, así como a transmitirlos a otra entidad.
                        </li>
                        <li className="list-terms">
                            Forma de ejercer los derechos: los derechos descritos pueden ejercerse ante LA
                            EMPRESA a través del correo electrónico que consta en el apartado “responsable
                            del tratamiento” de esta Política de Privacidad y en el que se le informará
                            adecuadamente para su ejercicio
                        </li>
                        <li className="list-terms">
                            Tutela de Derechos: frente a cualquier vulneración de tus derechos, especialmente cuando
                            no hayas obtenido satisfacción en su ejercicio, puedes presentar una reclamación ante la
                            Agencia Española de Protección de Datos u otra autoridad de control competente. También puedes
                            obtener más información sobre los derechos que te asisten dirigiéndote a dichos organismos
                        </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Terms