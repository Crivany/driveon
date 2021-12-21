import React from 'react'
import './Profesores.css'
import MaterialTable from 'material-table';
import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Footer from '../footer/Footer';
import NavbarHome from '../Navigation/NavbarHome/NavbarHome';




const Profesores = () => {

    const tableIcons = {
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
        ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
      };

    const columnas=[
        {
            title:'Profesor',
            field:'profesor'
        },
        {
            title:'Asignatura',
            field:'asignatura'
        },
        {
            title:'Especialidad',
            field:'especialidad'
        }
    ];

    const data=[
        { profesor: 'Jorge Sanchez', asignatura: 'lorem ipsum', especialidad: 'lorem ipsum'},
        { profesor: 'Andres Marcano', asignatura: 'lorem ipsum', especialidad: 'lorem ipsum'},
        { profesor: 'Marco Antonio', asignatura: 'lorem ipsum', especialidad: 'lorem ipsum'},
        { profesor: 'Jose Perez', asignatura: 'lorem ipsum', especialidad: 'lorem ipsum'},
        { profesor: 'Jesus Jimenez', asignatura: 'lorem ipsum', especialidad: 'lorem ipsum'},
        { profesor: 'Andrea Vargas', asignatura: 'lorem ipsum', especialidad: 'lorem ipsum'}
    ];


    return (
        <>
        <NavbarHome />
        <div className='cont-profesores'>
            <div className="head">
            <h1>Profesores</h1>
            </div>
            <div className="Tabla">
                <MaterialTable 
                columns={columnas}
                data={data}
                title="Profesores/Autoescuela"
                icons={tableIcons}
                />
            </div>
        </div>
        <br />
        <Footer />
        </>
    )
}

export default Profesores
