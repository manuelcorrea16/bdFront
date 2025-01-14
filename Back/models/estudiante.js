'use strict'
var mongoose = require ('mongiise');
var esquema = mongoose.Schema;

var estudianteEsquema = esquema({
    nombre: String,
    email: String,
    password: String,
    contacto: {
        redSocial: [{
            red: String,
            usuario: String
        }]
    },
    programa: String,
    sede: {
        codigo: Number,
        nombre: String
    }
});
module.exports = mongoose.model('Estudiante',estudianteEsquema);