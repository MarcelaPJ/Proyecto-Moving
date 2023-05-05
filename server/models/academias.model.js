const mongoose = require('mongoose');

const AcademiaSchema = new mongoose.Schema({
    alumno: {
        type: String,
        required: [true, "El nombre del estudiante es requerido"],
        minlength: [3, "El nombre debe tener al menos 3 caracteres"],
        unique: [true, "El nombre de este estudiante ya existe"]
    },
    
    curso: {
        type: String,
        required: [true, "El curso del estudiante es requerido"],
        min: [1, "Debe seleccionar un curso"]
    },

    apoderado: {
        type: String,
        required: [true, "El nombre del apoderado es requerido"],
        minlength: [3, "El nombre debe tener al menos 3 caracteres"],
        maxlength: [30, "El nombre debe tener menos de 30 caracteres"]
    },

    telefono: {
        type: Number,
        required: [true, "El númerp de teléfono es requerido"],
        min: [8, "Debe ingresar al menos 8 digitos"],
        max: [9, "Debe ingresar menos de 9 digitos"]
    },
    academias: {
        type:[String],
        required: [true, "Debe elegir al menos una academia"] 
    }
    
}, { timestamps: true });

module.exports.Academia = mongoose.model('Academia', AcademiaSchema);