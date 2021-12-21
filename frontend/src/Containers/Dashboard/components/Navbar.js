import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Toolbar, IconButton, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useDispatch } from 'react-redux'
import { cerrarSesion } from '../../../redux/actions/sessionAction';

const useStyles= makeStyles(()=>({
    root:{
        flexGrow: 1,
    },
    menuButton:{
        marginRight: '16px'
    },
    title:{
        flexGrow: 1
    },
    imagen:{
        borderRadius: '50%'
    }
    }));

function Navbar() {
    const { image, nombre } = useSelector(state => state.sesion)
    const classes= useStyles();
    const dispatch = useDispatch()

    const handleCerrar = ()=> {
        dispatch(cerrarSesion())
    }
    return (
        <div className={classes.root}>
            <AppBar position="static" color="rgba(60, 60, 59, 0.89)">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        {nombre}
                    </Typography>

                    <IconButton color="inherit">
                        <SignOut>  
                        <img src={image} width="40px" height="40px" className={classes.imagen}/>
                            <DropDown onClick={handleCerrar}>
                                <span>Cerrar Sesion</span>
                            </DropDown>
                        </SignOut>
                    </IconButton>
                </Toolbar>

            </AppBar>
            
        </div>
    );
}

const DropDown = styled.div`
position: absolute;
top: 48px;
right: 0px;
background: #fff;
border: 1px solid rgba(151, 151, 151, 0,34);
border-radius: 4px;
box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
padding: 10px;
font-size: 14px;
letter-spacing: 3px;
width: 100px;
opacity: 0;
`
const SignOut = styled.div`
position: relative;
height: 48px;
width: 48px;
display: flex;
cursor: pointer;
align-items: center;
justify-content: center;


&:hover{
    ${DropDown} {
        opacity: 1;
        transition-duration: 1s;
    }
}
`

export default Navbar;