//Dependecias
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
//Componentes y funciones
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import { cerrarSesion } from '../../../redux/actions/sessionAction';
//Estilos
import './Navbar.css';


function Navbar() {
  //Estados y Hooks
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const dispatch = useDispatch()
  const { image } = useSelector(state => state.sesion)
  //Funciones
  const cerrarS = (btn) => {btn === 6 ? dispatch(cerrarSesion()): console.log('No es')}

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'><FaIcons.FaBars onClick={showSidebar} /></Link>
          <Link to="/auth/profile"><img className='img' src={image} alt="foto perfil"></img></Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li onClick={()=>cerrarS(index)} key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
