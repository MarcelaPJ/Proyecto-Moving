const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/academias', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Conectado exitosamente a la base de datos"))
    .catch(err => console.log("Problemas al conectarse con la base de datos", err));