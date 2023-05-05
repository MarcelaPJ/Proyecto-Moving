import React, { useState } from 'react';
import axios from 'axios';
import {Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Container, Typography, Grid, TextField, Select, MenuItem, InputLabel, InputAdornment, 
			FormControl, FormGroup, Checkbox, FormControlLabel, Button, Stack } from '@mui/material';
import SendIcon from '@mui/icons-material/Send'
import HomeIcon from '@mui/icons-material/Home';
//import VisibilityIcon from '@mui/icons-material/Visibility';
import AccountCircle from '@mui/icons-material/AccountCircle'

const AcademyCreate = (props) => {
    //const {academias, setAcademias} = props;
   const [academias, setAcademias] = useState();
   const [errors, setErrors] = useState({});
   const navigate = useNavigate();

   const academiaForm = useFormik({
      initialValues: {
         alumno: '',
         curso: '',
         apoderado: '',
         telefono: '',
         academias:[],   //esto es nuevo
      },

      validationSchema: Yup.object({
         alumno: Yup.string()
            .required('El nombre del estudiante es requerido')
            .min(3, 'El nombre debe tener al menos 3 caracteres'),
         curso: Yup.string()//nuevo
            .required('El curso del estudiante es requerido')
            .min(1, "Debe seleccionar un curso"),
         apoderado: Yup.string()
            .required('El nombre del apoderado es requerido')
            .min(3, 'El nombre debe tener al menos 3 caracteres'),
         telefono: Yup.string() //string es nuevo
            .required('El teléfono de contacto es requerido')
            .min(8, "Debe tener al menos 8 caracteres")
            .matches(/^(\+?\d{1,3}[- ]?)?\d{8}$/, 'El número de teléfono no es válido'),//esto es nuevo
         academias: Yup.array().required().min(1, 'Seleccione al menos una opción'), //esto es nuevo  
      }),

      onSubmit: values => {
         axios.post('http://localhost:8000/api/academias', values)
            .then(res => {
               if(res.data.errors) {
                  setErrors(res.data.errors);
               } 
					else {
                  setAcademias(academias, res.data);
						console.log(res.data);
                  navigate(`/academias/${res.data._id}`); 
               }
            })
            .catch(err => console.log(err));
        }
   });

   return (
      <Container>
         <Box>
            <Button variant='contained' color='primary' type="button">
               <Link to="/home" style={{ textDecoration: 'none' }}>Volver al home</Link>
               <HomeIcon/>
            </Button>
            <Typography 
					color="#9c27b0" 
               variant='h4' 
               align='center'
				>
					Inscripción de Estudiantes
				</Typography>
            </Box>
            
            <Box 
               sx={{
                  border: 2,
						p: 5,
						borderColor: "#1565c0",
						bgcolor: "#fff",
						color: '#9c27b0'
            	}}
				>
					<Box sx={{
						marginBottom: 3,
						bgcolor: "#fff",
						color: '#9c27b0'
            	}}>
						<Typography 
							color="primary" 
							variant='h5' 
							align='center'
						>
							Complete el siguiente formulario
						</Typography>
					</Box>
						<Box>
                    	<form onSubmit={academiaForm.handleSubmit} className="form">
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
                                 variant='outlined'
                                 fullWidth
                                 name="alumno"
                                 label="Nombre y apellido del estudiante"
                                 color="secondary" focused
											InputProps={{
												startAdornment: (
												  <InputAdornment position="start" >
													 <AccountCircle color="secondary"/>
												  </InputAdornment>
												),
											 }}
                                 value={academiaForm.values.alumno}
                                 onChange={academiaForm.handleChange}
                              />
                              {errors.alumno ? <p>{errors.alumno.message}</p> : academiaForm.errors.alumno ? <p>{academiaForm.errors.alumno}</p> : ''}
                           </Grid>
                           <Grid item xs={12} md={6}>
                              <FormControl 
                                 variant="outlined" 
                                 color="secondary" focused
                                 fullWidth>
                                 <InputLabel id="curso-label">Curso</InputLabel>
                                 <Select
                                 	labelId="curso-label"
                                    name="curso"
                                    value={academiaForm.values.curso}
                                    onChange={academiaForm.handleChange}
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
                              {errors.curso ? <p>{errors.curso.message}</p> : academiaForm.errors.curso ? <p>{academiaForm.errors.curso}</p> : ''}
                           </Grid>
                           <Grid item xs={12} md={6}>
                              <TextField 
                                 variant='outlined'
                                 fullWidth
                                 type='text'
                                 name="apoderado"
                                 label="Nombre y apellido del apoderado"
                                 color="secondary" focused
											InputProps={{
												startAdornment: (
												  <InputAdornment position="start" >
													 <AccountCircle color="secondary"/>
												  </InputAdornment>
												),
											 }}
                                 value={academiaForm.values.apoderado}
                                 onChange={academiaForm.handleChange}
                              />
                              {errors.apoderado ? <p>{errors.apoderado.message}</p> : academiaForm.errors.apoderado ? <p>{academiaForm.errors.apoderado}</p> : ''}
                           </Grid>
                           <Grid item xs={12} md={6}>
                              <TextField
                                 type='text'
                                 name="telefono"
                                 label="Teléfono de contacto"
                                 variant="outlined"
                                 color="secondary" focused
                                 InputProps={{
                                    startAdornment: <InputAdornment position="start">+56 9</InputAdornment>,
                                 }}
                                 fullWidth
                                 value={academiaForm.values.telefono}
                                 onChange={academiaForm.handleChange}
                              />
                              {errors.telefono ? <p>{errors.telefono.message}</p> : academiaForm.errors.telefono ? <p>{academiaForm.errors.telefono}</p> : ''}
                           </Grid>
                           <Grid item xs={12} md={6}>
                              <FormGroup> 
											<Typography
												color="primary" 
												variant='h6' 
												align='left'
											> 
												Academias:
											</Typography>
                                 <FormControlLabel 
                                    control={
                                       <Checkbox 
                                          name='academias'
                                          value='Fútbol'
                                          checked={academiaForm.values.academias.includes('Fútbol')}
                                          onChange={academiaForm.handleChange}
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
                                          checked={academiaForm.values.academias.includes('Tenis')}
                                          onChange={academiaForm.handleChange}
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
                                          checked={academiaForm.values.academias.includes('Basquetball')}
                                          onChange={academiaForm.handleChange}
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
                                          checked={academiaForm.values.academias.includes('Natación')}
                                          onChange={academiaForm.handleChange}
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
                                          checked={academiaForm.values.academias.includes('Atletismo')}
                                          onChange={academiaForm.handleChange}
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
                                          checked={academiaForm.values.academias.includes('Teatro')}
                                          onChange={academiaForm.handleChange}
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
                                          checked={academiaForm.values.academias.includes('Música')}
                                          onChange={academiaForm.handleChange}
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
                                          checked={academiaForm.values.academias.includes('Astronomía')}
                                          onChange={academiaForm.handleChange}
                                          color='secondary'
                                       />
                                    } 
                                    label="Astronomía" 
                                 /> 
                                </FormGroup>
                                {errors.academias ? <p>{errors.academias.message}</p> : academiaForm.errors.academias ? <p>{academiaForm.errors.academias}</p> : ''}
                           </Grid>
                           <Stack direction='row' width='100%' justifyContent='center' marginTop={'20px'} spacing={20}>
                              <Button className="btn" variant='contained' color='secondary' endIcon={<SendIcon />} type="submit">Agregar estudiante</Button>
                              {/*<Button className='btn' variant='contained' color='primary' type="button">
                                 <Link to="/academias">Ver inscripción</Link>
                                 <VisibilityIcon/>
											</Button>*/}
                           </Stack>
                        </Grid>
                    	</form>
                	</Box>
            </Box>
      </Container>
   )
}

export default AcademyCreate;