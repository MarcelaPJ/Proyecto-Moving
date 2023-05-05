const { Academia } = require('../models/academias.model');

// Crear estudiante con academias
module.exports.createAcademia = (req, res) => {
    const { alumno, curso, apoderado, telefono, academias } = req.body;
    Academia.create({
        alumno,
        curso,
        apoderado,
        telefono,
        academias
        
    })
        .then(newAcademia => res.json(newAcademia))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));     
}

// Obtener todos los estudiantes con sus academias
module.exports.findAllAcademias = (req, res) => {
    Academia.find({})
        .then(allAcademias => res.json(allAcademias))
        .catch(err => res.json({message: "something went wrong!", error: err}));
}

// Obtener una estudiante con sus academias
module.exports.findOneAcademia = (req, res) => {
    Academia.findOne({ _id: req.params.id })
        .then(oneAcademia => res.json({academia: oneAcademia}))
        .catch(err => res.json({message: "something went wrong!", error: err}));
}

// Actualizar un estudiante con sus academias
module.exports.updateAcademia = (req, res) => {
    Academia.findOneAndUpdate({_id: req.params.id}, req.body,
        {new:true})
        .then(updatedAcademia => res.json({academia: updatedAcademia}))
        .catch(err => res.json({message: "something went wrong!", error: err}));
}

// Borrar un estudiante con sus academias
module.exports.deleteAcademia = (req, res) => {
    Academia.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json({academia: deleteConfirmation}))
        .catch(err => res.json({message: "something went wrong!", error: err}));
}

