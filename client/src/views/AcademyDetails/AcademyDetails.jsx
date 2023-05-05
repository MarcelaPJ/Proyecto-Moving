import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from 'react-router-dom';
import './DetailsStyles.css'



const AcademyDetails = () => {
    const { id } = useParams();
    const [academia, setAcademia] = useState({});
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/academias/${id}`)
            .then(res => setAcademia(res.data.academia))
            .catch(err => console.log(err));
    }
    , [id]);

    const goToDelete = () => {
        axios.delete(`http://localhost:8000/api/academias/${id}`)
            .then(res => navigate('/academias'))
            .catch(err => console.log(err)); 

    }
     
    const goToEdit = () => {
        navigate(`/academias/${id}/edit`) 
       
    }
    
    return (
        <div className="container">
            <div className="header">
                <h1>Detalle del estudiante</h1>
                <button><Link to="/home" style={{ textDecoration: 'none' }}>Volver al home</Link></button>
                <div>
                <button className="btn1">
                    <Link to="/academias" style={{ textDecoration: 'none' }}>Ver inscripción</Link>
                </button>
            </div>
            </div>
            <div className="sub">
                <h2>Academias inscritas para: {academia.alumno}</h2>
            </div>
            <div className="box">
                <h5>Curso: {academia.curso}</h5>
                <h5>Apoderado: {academia.apoderado}</h5>
                <h5>Teléfono: {academia.telefono}</h5>
                <h5>Academias: {academia.academias && academia.academias.map((rubro, index) => (
                    <p key={rubro}>{rubro}</p>
                ))}
                </h5>
                {/*<p>Academias: {academia.academias && academia.academias.join(" - ")}</p>*/}
            </div>
            <div>
                <button className="btn1" onClick={goToDelete}>
                    Borrar al estudiante {academia.alumno}
                </button>
            </div>
            <div>
                <button className="btn1" onClick={goToEdit}>
                    Editar información del estudiante {academia.alumno}
                </button>
            </div>
            
        </div>
    );
    
}

export default AcademyDetails;