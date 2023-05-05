import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import './PanelStyles.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import {TableRow, TableCell, TableContainer, Table, Paper, TableHead, TableBody, Button, Container, Box, Typography} from '@mui/material';



const AcademyPanel = () => {
    const [academias, setAcademias] = useState([]);
   
    

    useEffect(() => {
        axios.get('http://localhost:8000/api/academias')
            .then(res => setAcademias(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <Container>
            <Box >
            <Button variant='outlined' color='secondary' type="button"><Link style={{ textDecoration: 'none' }} to="/academias/new" >Inscribir una academia</Link></Button>
                <Typography 
                    color="#9c27b0" 
                    variant='h4' 
                    align='center'>
                        Estudiantes inscritos en academias
                </Typography>
                
            </Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 600 }} >
                    <TableHead className="tableHead">
                        <TableRow>
                            <TableCell align="left" className="tableRow">Estudiante</TableCell>
                            <TableCell align="left" className="tableRow">Curso</TableCell>
                            <TableCell align="left">Apoderado</TableCell>
                            <TableCell align="left">Teléfono</TableCell>
                            <TableCell align="left">Academias</TableCell>
                            <TableCell align="left">Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {academias.map(academia  => (
                        <TableRow key={academia._id}>
                            <TableCell>{academia.alumno}</TableCell>
                            <TableCell>{academia.curso}</TableCell>
                            <TableCell>{academia.apoderado}</TableCell>
                            <TableCell>{academia.telefono}</TableCell>
                            <TableCell>{academia.academias && academia.academias.map((rubro, index) => (
                                        <p key={rubro}>{rubro}</p> ))}
                            </TableCell>
                            <TableCell>
                                 {/*<button className="edit"><Link to={`/academias/${academia._id}/edit`}>Editar Datos</Link></button> ||*/}
                                <Button><Link to={`/academias/${academia._id}`} style={{ textDecoration: 'none' }}>Ver</Link><VisibilityIcon/></Button> 
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );

}

export default AcademyPanel;