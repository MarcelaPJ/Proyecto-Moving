const AcademiaController = require('../controllers/academias.controllers');


module.exports = app => {
    app.get('/api/academias', AcademiaController.findAllAcademias);
    app.post('/api/academias', AcademiaController.createAcademia);
    app.get('/api/academias/:id', AcademiaController.findOneAcademia);
    app.put('/api/academias/:id', AcademiaController.updateAcademia);
    app.delete('/api/academias/:id', AcademiaController.deleteAcademia);
}

//se sacó rutas de user 