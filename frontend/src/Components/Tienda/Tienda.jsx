//Dependencias
import {useEffect, useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
//Componentes y funciones
import NavbarHome from '../Navigation/NavbarHome/NavbarHome';
import Footer from '../footer/Footer';
import {getPaq} from '../../redux/actions/apiAction'
import styled from 'styled-components'
//Estilos
import './styleTienda.css'
import { SettingsPowerTwoTone } from '@material-ui/icons';


const Tienda = ()=> {
    const [todos, setTodos] = useState()

    const fetchApi = async () =>{
        await getPaq()
        .then((paq) => setTodos(paq.filter(curso=> curso.attributes.Tipo === "Practico" ) ))
    }
     
    useEffect(() => {
        fetchApi()
    }, [])
    
    return(
        <>
            <NavbarHome />
             
            <div className="cont-tienda">
                <div className="cont-filtros">
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Cursos de Moto</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-start"}}>
                        <Button>Moto Eléctrica</Button>
                        <Button>Moto a Gasolína</Button>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography>Cursos de Auto</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                    >
                    <Typography>Curso de CicloMotor</Typography>
                    </AccordionSummary>
                </Accordion>
                </div>
                <div className="cont-products">
                        
                    {! todos ? 'Cargando...' : todos.map ((todo, index) =>{
                        return    (
                        <Card key={todo.id} sx={{ maxWidth: 250 }}>
                            <CardImg src="https://media.istockphoto.com/photos/driving-car-on-the-road-travel-background-picture-id1214872234?k=20&m=1214872234&s=612x612&w=0&h=xpw_tuyK55rlQsiUeUNQRaKTQHfi5pk8vRBtYDwQb84=" alt="image" />
                            <CardHeading>{todo.attributes.nombre}</CardHeading>
                            <Decription>
                            <Benefits>
                            <BenefitsButton>Beneficios</BenefitsButton>
                            <Dropdown1>
                                <li>{todo.attributes.Beneficios[0]}</li>
                                <li>{todo.attributes.Beneficios[1]}</li>
                                <li>{todo.attributes.Beneficios[2]}</li>
                                <li>{todo.attributes.Beneficios[3]}</li>
                            </Dropdown1>
                            </Benefits>
                            <Benefits>
                            <TestButton>Exámenes</TestButton>
                            <Dropdown1>
                                <li>{todo.attributes.examen[0]}</li>
                                <li>{todo.attributes.examen[1]}</li>
                                <li>{todo.attributes.examen[2]}</li>
                                <li>{todo.attributes.examen[3]}</li>
                            </Dropdown1>
                            </Benefits>
                            </Decription>
                            <MatriculateButton>Matricúlate</MatriculateButton>
                        </Card>
                        )
                    })}
        
                </div>
            </div>
            <Footer />
        </>
    )
}
const Card = styled.div`
        overflow: hidden;
        padding: 0 0 32px;
        margin: 48px auto 0;
        width: 250px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
        border-radius: 5px;
    `

const CardHeading = styled.h1`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  font-family: 'Oswald';
  `
const CardImg = styled.img`
width: 100%;
border-radius: 5px;
height: 200px;
margin-bottom: 10px;
`
const Dropdown1 = styled.ul`
list-style: none;
position: absolute;
background-color: whitesmoke;
border-radius: 4px;
box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
max-width: 250px;
display: none;
opacity: 0;
padding: 15px;
margin-top: 10px;
`

const Benefits = styled.div`
justify-content: center;
&:hover{
        ${Dropdown1} {
            display: block;
            transition-duration: 1s;
            opacity: 1;
        }
    }
`

const BenefitsButton = styled.div`
position: relative;
cursor: pointer;
background-color: whitesmoke;
border-radius: 25px;
border: 1px grey;
width: 100px;
text-align: center;
font-family: 'Poppins';
font-size: 15px;
margin-right: 5px;

    &:hover{
        background-color: greenyellow;
        transition-duration: 1s;
    }
`
const TestButton = styled.div`
position: relative;
cursor: pointer;
background-color: whitesmoke;
border-radius: 25px;
border: 1px grey;
width: 100px;
text-align: center;
font-family: 'Poppins';
font-size: 15px;
&:hover{
        background-color: greenyellow;
        transition-duration: 1s;
    }
`
const Decription = styled.div`
display: flex;
justify-content: space-evenly;
`
const MatriculateButton = styled.div`
    margin-bottom: -15px;
    margin-top: 50px;
    text-align: center;
    &:hover{
        background-color: yellowgreen;
    }
`
export default Tienda;