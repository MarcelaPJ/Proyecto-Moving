const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const secretKey='secretito';

module.exports.createUser = async (req, res) => {
  try {
    const { name, lastName, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Contraseñas no coinciden' });
    }

    //   const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ name, lastName, email, password, confirmPassword});
    await user.save();

    res.status(201).json({ message: 'Usuario creado!' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al crear usuario' });
  }
};

module.exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(401).json({ message: 'Error de autenticación 1' });
    } else {
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (isValidPassword) {
            const token = jwt.sign({ 
                email: user.email 
            }, secretKey);
            
                res.cookie('token', token, secretKey, { httpOnly: true });
                res.status(200).json({ message: 'Usuario logueado con éxito' });

        } else {
            return res.status(403).json({ message: 'Credenciales inválidas' });
        }
    }
  } catch (error) {
    console.log(error);
    return res.status(403).json({ message: 'credenciales inválidas' });
  }
};










