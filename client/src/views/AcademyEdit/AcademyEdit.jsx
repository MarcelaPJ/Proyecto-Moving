import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Container, Box, Grid, Typography, Button, TextField, FormControl, InputLabel, Select, MenuItem, InputAdornment, FormGroup, Checkbox, FormControlLabel, Stack } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SendIcon from '@mui/icons-material/Send'

const AcademyEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [academia, setAcademia] = useState(null);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/academias/${id}`)
            .then(res => {setAcademia(res.data.academia);
                console.log(res.data.academia);
            })

            .catch(err => console.log(err));
    }, [id]);


    return (
        <Container>
            <Box>
                <Typography
                    color="#9c27b0" 
                    variant='h4' 
                    align='center'
                >
                    Inscripción de academias
                </Typography>
                <Button 
                    variant='contained' 
                    color='primary' 
                    type="button"
                >
                    <Link to="/home">Volver al home</Link>
                    <HomeIcon/>
                </Button>
            </Box>
            <Box>
                <Typography
                    color="primary" 
                    variant='h5' 
                    align='center'
                >
                    Editar a {academia ? academia.alumno : ""}
                </Typography>
                
                <Box className="box2"
                    sx={{
                        border: 2,
                        p: 5,
                        borderColor: "#1565c0",
                        bgcolor: "#fff",
                        color: '#9c27b0'
                      }}
                >
                    {academia ? 
                    <Formik
                        initialValues={academia}
                        validationSchema={Yup.object({
                            alumno: Yup.string()
                                .required('El nombre del estudiante es requerido')
                                .min(3, 'El nombre debe tener al menos 3 caracteres'),
                            curso: Yup.string()
                                .required('El curso del estudiante es requerido')
                                .min(1, "El curso debe tener al menos 1 caracter"),
                            apoderado: Yup.string()
                                .required('El nombre del apoderado es requerido')
                                .min(3, 'El nombre debe tener al menos 3 caracteres'),
                            telefono: Yup.number()
                                .required('El teléfono de contacto es requerido')
                                .min(8, "Debe tener al menos 8 caracteres"),
                            academias: Yup.array().required().min(1, 'Seleccione al menos una opción')
                        })}
                        onSubmit={(values, { setSubmitting }) => {
                            axios.put(`http://localhost:8000/api/academias/${id}`, values)
                            .then(res => {
                                if(res.data.errors) {
                                    setErrors(res.data.errors);
                                } else {
                                    console.log(res.data.academia)
                                    navigate(`/academias/${academia._id}`); 
                                }
                            })
                            .catch(err => console.log(err));
                        }}
                        >
                        {formik => (
                            <form onSubmit={formik.handleSubmit} className="form1">
                                <Grid
                                    container 
                                    direction="row" 
                                    alignItems={"center"} 
                                    justifyContent="space-between" 
                                    spacing={2}
                                    sx={{width:"100%"}}
                                >
                                    <Grid item xs={12} md={6}>
                                        <TextField 
                                            type='text'
                                            variant='filled'
                                            fullWidth
                                            name="alumno"
                                            label="Nombre y apellido del estudiante"
                                            color="secondary" focused
                                            value={formik.values.alumno}
                                            onChange={formik.handleChange}
                                        />
                                        {errors.alumno ? <p>{errors.alumno.message}</p> : formik.errors.alumno ? <p>{formik.errors.alumno}</p> : ''}
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                    <FormControl 
                                        variant="filled" 
                                        color="secondary" focused
                                        fullWidth>
                                        <InputLabel id="curso-label">Curso</InputLabel>
                                        <Select
                                            labelId="curso-label"
                                            name="curso"
                                            value={formik.values.curso}
                                            onChange={formik.handleChange}
                                            label="Curso"
                                        >
                                            <MenuItem value=""><em>Seleccione un curso</em></MenuItem>
                                            <MenuItem value="1b">1º básico</MenuItem>
                                            <MenuItem value="2b">2º básico</MenuItem>
                                            <MenuItem value="3b">3º básico</MenuItem>
                                            <MenuItem value="4b">4º básico</MenuItem>
                                            <MenuItem value="5b">5º básico</MenuItem>
                                            <MenuItem value="6b">6º básico</MenuItem>
                                            <MenuItem value="7b">7º básico</MenuItem>
                                            <MenuItem value="8b">8º básico</MenuItem>
                                        </Select>
                                    </FormControl>
                                        {errors.curso ? <p>{errors.curso.message}</p> : formik.errors.curso ? <p>{formik.errors.curso}</p> : ''}
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField 
                                            variant='filled'
                                            fullWidth
                                            type='text'
                                            name="apoderado"
                                            label="Nombre y apellido del apoderado"
                                            color="secondary" focused
                                            value={formik.values.apoderado}
                                            onChange={formik.handleChange}
                                        />
                                        {errors.apoderado ? <p>{errors.apoderado.message}</p> : formik.errors.apoderado ? <p>{formik.errors.apoderado}</p> : ''}
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            type='text'
                                            name="telefono"
                                            label="Teléfono de contacto"
                                            variant="filled"
                                            color="secondary" focused
                                            InputProps={{
                                                startAdornment: <InputAdornment position="start">+56 9</InputAdornment>,
                                            }}
                                            fullWidth
                                            value={formik.values.telefono}
                                            onChange={formik.handleChange}
                                        />
                                        {errors.telefono ? <p>{errors.telefono.message}</p> : formik.errors.telefono ? <p>{formik.errors.telefono}</p> : ''}
                                    </Grid>
                                   
                                </Grid>
                                <Grid>
                                <Grid item xs={12} md={6}>
                              <FormGroup> 
                                 Academias:
                                 <FormControlLabel 
                                    control={
                                       <Checkbox 
                                          name='academias'
                                          value='Fútbol'
                                          checked={formik.values.academias.includes('Fútbol')}
                                          onChange={formik.handleChange}
                                          color='secondary'
                                       />
                                    }
                                    label="Fútbol"
                                 />
                                 <FormControlLabel 
                                    control={
                                       <Checkbox
                                          name='academias'
                                          value='Tenis'
                                          checked={formik.values.academias.includes('Tenis')}
                                          onChange={formik.handleChange}
                                          color='secondary'
                                       />
                                    } 
                                    label="Tenis" 
                                 />
                                 <FormControlLabel 
                                    control={
                                       <Checkbox 
                                          name='academias'
                                          value='Basquetball'
                                          checked={formik.values.academias.includes('Basquetball')}
                                          onChange={formik.handleChange}
                                          color='secondary'
                                       />
                                    } 
                                    label="Basquetball" 
                                 />
                                 <FormControlLabel 
                                    control={
                                       <Checkbox 
                                       	name='academias'
                                          value='Natación'
                                          checked={formik.values.academias.includes('Natación')}
                                          onChange={formik.handleChange}
                                          color='secondary'
                                       />
                                    } 
                                    label="Natación" 
                                 />
                                 <FormControlLabel 
                                    control={
                                       <Checkbox 
                                       	name='academias'
                                          value='Atletismo'
                                          checked={formik.values.academias.includes('Atletismo')}
                                          onChange={formik.handleChange}
                                          color='secondary'
                                       />  
                                    } 
                                    label="Atletismo" 
                                 />
                                 <FormControlLabel 
                                    control={
                                       <Checkbox 
                                          name='academias'
                                          value='Teatro'
                                          checked={formik.values.academias.includes('Teatro')}
                                          onChange={formik.handleChange}
                                          color='secondary'
                                       />
                                    } 
                                    label="Teatro" 
                                 />
                                 <FormControlLabel 
                                    control={
                                       <Checkbox 
                                          name='academias'
                                          value='Música'
                                          checked={formik.values.academias.includes('Música')}
                                          onChange={formik.handleChange}
                                          color='secondary'
                                       />
                                    } 
                                    label="Música" 
                                 />
                                 <FormControlLabel 
                                    control={
                                       <Checkbox 
                                          name='academias'
                                          value='Astronomía'
                                          checked={formik.values.academias.includes('Astronomía')}
                                          onChange={formik.handleChange}
                                          color='secondary'
                                       />
                                    } 
                                    label="Astronomía" 
                                 /> 
                                </FormGroup>
                                {errors.academias ? <p>{errors.academias.message}</p> : formik.errors.academias ? <p>{formik.errors.academias}</p> : ''}
                                    </Grid>
                                    <Stack direction='row' width='100%' marginTop={'20px'} justifyContent={'center'} spacing={20}>
                                        <Button variant='contained' color='secondary' endIcon={<SendIcon />} type="submit">Editar información</Button>
                                    </Stack>
                                </Grid>
                            </form>
                        )}
                    </Formik> : null }
                </Box>  
            </Box>
        </Container>
    )
}
export default AcademyEdit;