import axios from 'axios';

export const createUser = (name, email, password, confirmPassword) => axios.post('http://localhost:8000/api/academias/register', { name, lastName:name, email, password, confirmPassword });

export const loginUser = (email, password) => axios.post('http://localhost:8000/api/academias/login', { email, password });

export const getUser = () => axios.get('http://localhost:8000/api/academias/register')
