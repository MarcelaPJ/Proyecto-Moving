const { createUser, loginUser } = require('../controllers/user.controllers');
const { authenticate } = require ('../config/jwt.config');

module.exports = app => {
    app.post('/api/academias/register', createUser);
    app.post('/api/academias/login', loginUser);
}

//nuevo