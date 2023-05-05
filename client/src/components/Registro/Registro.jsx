import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../services/academias_services'
import styles from './Registro.module.css';

const Registro = () => {
    const [loading, setLoading] = useState(false); 
    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        name: Yup.string()
        .required('El nombre es requerido'),
    
        email: Yup.string()
        .email('Email inválido')
        .required('El email es requerido'),
    
        password: Yup.string()
        .required('La contraseña es requerida')
        .min(6, 'La contraseña debe tener al menos 6 caracteres')
        .max(20,'La contraseña no debe superar los 20 caracteres'),
    
        confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
        .required('Debe confirmar la contraseña'),
    });

    const formik = useFormik({
        initialValues: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        },
        validationSchema,
        onSubmit: async (values) => {
        setLoading(true);
        try {
            await createUser(values.name, values.email, values.password, values.confirmPassword);
            setLoading(false);
            navigate('/login'); 
        } catch (err) {
            console.error(err.response.data);
            setLoading(false);
        }
        },
    });

    return (
        <div className={styles["fondo"]}>
                <h1 className={styles['h1']}>Registro</h1>
                <form onSubmit={formik.handleSubmit} className={styles["form"]}>
                <h2>Registro</h2>
                    <div>
                        <label htmlFor="name">Nombre:</label>
                        <br/>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        />
                        {formik.errors.name && formik.touched.name && <div>{formik.errors.name}</div>}
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <br/>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        />
                        {formik.errors.email && formik.touched.email && <div>{formik.errors.email}</div>}
                    </div>
                    <div>
                        <label htmlFor="password">Contraseña:</label>
                        <br/>
                        <input
                        type="password"
                        id="password"
                        name="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        />
                        {formik.errors.password && formik.touched.password && <div>{formik.errors.password}</div>}
                    </div>
                    <div>
                        <label htmlFor="confirmPassword">Confirmar contraseña:</label>
                        <br/>
                        <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        onChange={formik.handleChange}
                        value={formik.values.confirmPassword}
                        />
                        {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                        <div>{formik.errors.confirmPassword}</div>
                        )}
                    </div>
                    <button type="submit" disabled={loading}>
                        Registrarse
                    </button>
                </form>
        </div>
    );
};

export default Registro;
