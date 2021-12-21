//Dependencias
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
//Componentes y funciones
import Routes from "./Routes/Routes";
import { store } from './redux/store/store'
//Estilos
import './Style/styleGlobal.css'

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('root')
)