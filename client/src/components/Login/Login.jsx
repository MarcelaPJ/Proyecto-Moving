import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { loginUser } from '../../services/academias_services';
import styles from './Login.module.scss';

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleLogin = async (values, { setSubmitting }) => {
    try {
      await loginUser(values.email, values.password);
      navigate('/home');
    } catch (error) {
      setError('Email o contraseña incorrectos');
      setSubmitting(false);
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Debe ingresar un email válido')
      .required('El email es obligatorio'),

    password: Yup.string()
      .required('La contraseña es obligatoria'),
  });

  useEffect(() => {
    const token = getCookie('token');
    if (token) {
      navigate('/home');
    }
  }, [navigate]);

  const getCookie = (name) => {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(`${name}=`)) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  };

  return (
    <div className={styles["cont"]}>
      <div className={styles["fondo"]}>
        <h2>Iniciar Sesión</h2>
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
        >
            {({ isSubmitting }) => (
            <Form className={styles["form"]}>
              <h1>Login</h1><br/>
             <div>
                <label htmlFor="email">Email:</label>
                <Field type="email" id="email" name="email" className={styles["field"]}/>
                <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div>
                <label htmlFor="password">Contraseña:</label>
                <Field type="password" id="password" name="password" className={styles["field"]}/>
                <ErrorMessage name="password" component="div" className="error" />
            </div>
                {error && <div className="error">{error}</div>}
            <button type="submit" disabled={isSubmitting}>
              Iniciar Sesión
            </button>
            <button type='button'>
              <Link to="/register" className= {styles["link"]}>Registrarse</Link>
            </button>
            </Form>
            )}
        </Formik>
        </div>
    </div>
  );
};

export default Login;

  