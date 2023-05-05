const AcademiaController = require('../controllers/academias.controllers');
const { createUser, loginUser } = require('../controllers/user.controllers');
const { authenticate } = require ('../config/jwt.config');

module.exports = app => {
    app.get('/api/academias', AcademiaController.findAllAcademias);
    app.post('/api/academias', AcademiaController.createAcademia);
    app.get('/api/academias/:id', AcademiaController.findOneAcademia);
    app.put('/api/academias/:id', AcademiaController.updateAcademia);
    app.delete('/api/academias/:id', AcademiaController.deleteAcademia);

    app.post('/api/academias/register', createUser);
    app.post('/api/academias/login', loginUser);
}