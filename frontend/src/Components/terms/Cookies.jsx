//Dependencias
import React from 'react';
import { Link } from 'react-router-dom';
//Componentes y funciones
import Footer from '../footer/Footer';
import NavbarHome from '../Navigation/NavbarHome/NavbarHome';
//Estilos
import './terms.css'

const Cookies = () => {
    return (
        <>
        <NavbarHome />
        <div className="cont-terms">
            <div className="cont-terms-contend">
                <h1 className="title-terms">Política de Cookies</h1>
                <p className="text-terms">
                    En cumplimiento de la Ley 34/2002, de fecha 11 de julio, de servicios de la sociedad
                    de la información y del comercio electrónico,se informa que la página
                    web <Link className="link-terms" to="/">https://autoescueladriveon.com/</Link> titularidad
                    de DRIVE SAFE ACADEMY S.L SL utiliza cookies. <br /> Las cookies son ficheros que se descargan
                    en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página
                    web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación 
                    e un usuario o de su equipo y, dependiendo de la información que contengan y de la forma
                    en que utilice su equipo. <br /> Además, mejoran su proceso de navegación, ya que permiten
                    que la página web ofrezca al usuario información que puede ser de su interés en
                    función del uso que realice, del contenido de la misma.
                </p>
                <h2 className="title-terms-title">Tipo de cookies que se utilizan y cuáles son sus finalidades</h2>
                <p className="text-terms">
                    Las cookies que utilizamos no almacenan dato personal alguno, ni ningún tipo de información
                    que pueda identificarle, salvo que quiera registrarse, de forma voluntaria con el fin de utilizar
                    los servicios que ponemos a su disposición o de recibir información sobre promociones y
                    contenidos de su interés.
                </p>
                <p className="text-terms">
                    <strong>Cookies de analíticas:</strong> Cada vez que un Usuario visita un servicio
                    o información de la página web o una herramienta de un proveedor externo
                    (Google Analytics, Comscore y similares que podrán añadirse a este listado en caso
                    de que varíen en relación con los actuales) genera una cookie analítica en el ordenador
                    del usuario. Esta cookie que sólo se genera en la visita, servirá en próximas visitas
                    a los servicios de la página web para identificar de forma anónima al visitante. 
                    Los objetivos principales que se persiguen son:
                </p>
                <ul className="ul-terms">
                    <li className="list-terms">
                        Permitir la identificación anónima de los usuarios navegantes a través de la
                        cookie (identifica navegadores y dispositivos, no personas) y por lo tanto la
                        contabilización aproximada del número de visitantes y su tendencia en el tiempo.
                    </li>
                    <li className="list-terms">
                        Identificar de forma anónima los contenidos más visitados y por lo tanto más
                        atractivos para los usuarios.
                    </li>
                    <li className="list-terms">
                        Saber si el usuario que está accediendo es nuevo o repite visita. Importante:
                        Salvo que el usuario decida registrarse en algún servicio o contenido de la
                        página web, la cookie nunca irá asociada a ningún dato de carácter personal
                        que pueda identificarle. Dichas Cookies sólo serán utilizadas con propósitos
                        estadísticos que ayuden a la optimización de la experiencia de los usuarios
                        en la página web.
                    </li>
                </ul>
                <h2 className="title-terms-title">Permitir, bloquear o eliminar las cookies instaladas</h2>
                <p className="text-terms">
                    En caso de no querer recibir cookies, por favor configure su navegador de Internet,
                    para que las borre del disco duro de su ordenador, las bloquee o le avise en caso de
                    instalación de las mismas. Para continuar sin cambios en la configuración de las
                    cookies, simplemente, continúe en la página web.
                </p>
                <p className="text-terms">
                    Puede usted permitir, bloquear o eliminar las cookies instaladas en su equipo mediante
                    la configuración de las opciones de su navegador. Puede encontrar información sobre
                    cómo hacerlo, en relación con los navegadores más comunes, en los links que se incluyen
                    a continuación:
                </p>
                <ul className="ul-terms">
                    <li className="list-terms">
                        Explorer: <a className="link-terms" href="https://support.microsoft.com/es-es/kb/278835" rel="noreferrer" target="_blank">https://support.microsoft.com/es-es/kb/278835</a> 
                    </li>
                    <li className="list-terms">
                        Chrome: <a className="link-terms" href="http://support.google.com/chrome/bin/answer.py?hl=es&answer=95647" rel="noreferrer" target="_blank">http://support.google.com/chrome/bin/answer.py?hl=es&answer=95647</a>
                    </li>
                    <li className="list-terms">
                        Firefox: <a className="link-terms" href="https://support.mozilla.org/es/kb/Borrar%20cookies" rel="noreferrer" target="_blank">https://support.mozilla.org/es/kb/Borrar%20cookies</a>
                    </li>
                    <li className="list-terms">
                        Safari: <a className="link-terms" href="http://support.apple.com/kb/ph5042" rel="noreferrer" target="_blank">http://support.apple.com/kb/ph5042</a>
                    </li>
                </ul>
                <p className="text-terms">
                    Le informamos, no obstante, de la posibilidad de que la desactivación de alguna
                    cookie impida o dificulte la navegación o la prestación de los servicios ofrecidos
                    en la página web.
                </p>
                <h2 className="title-terms-title">Modificaciones</h2>
                <p className="text-terms">
                    La página web <Link className="link-terms" to="/">https://autoescueladriveon.com/</Link> titularidad
                    de DRIVE SAFE ACADEMY S.L, puede modificar esta política de cookies en función
                    de exigencias legales, o con la finalidad de adaptar dicha política a las instrucciones
                    dictadas por la Agencia Española de Protección de Datos
                </p>
                <p className="text-terms final">
                    Por esta razón, aconsejamos a los usuarios que la visiten periódicamente.
                    Cuando se produzcan cambios significativos en esta política de cookies,
                    se comunicarán a los usuarios bien mediante la web o a través de correo
                    electrónico a los usuarios registrados. En caso de no estar de acuerdo envíe
                    un correo electrónico a <a className="link-terms" href="mailto:info@autoescueladriveon.com ">info@autoescueladriveon.com</a> 
                </p>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Cookies