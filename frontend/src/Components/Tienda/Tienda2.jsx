//Dependencias
import {useEffect, useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
//Componentes y funciones
import NavbarHome from '../Navigation/NavbarHome/NavbarHome';
import Footer from '../footer/Footer';
import {getPaq} from '../../redux/actions/apiAction'
//Estilos
import './styleTienda.css'
import { SettingsPowerTwoTone } from '@material-ui/icons';


const Tienda2 = ()=> {
    const [todos, setTodos] = useState()

    const fetchApi = async () =>{
        await getPaq()
        .then((paq) => setTodos(paq.filter(curso=> curso.attributes.Tipo === "Teorico" ) ))
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
                        <CardMedia
                            component="img"
                            alt="curso"
                            height="140"
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRpafSMBxk-gSUuHJ3zEQvYOkB1QmnpTI6rA&usqp=CAU"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {todo.attributes.nombre}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt repellat labore, optio dolores vel architecto dicta consequuntur eligendi distinctio possimus!
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Comprar</Button>
                            <Button size="small">Leer Más</Button>
                        </CardActions>
                    </Card>
                        )
                    })}
        
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Tienda2;