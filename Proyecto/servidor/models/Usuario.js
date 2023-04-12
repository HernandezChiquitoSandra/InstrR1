const mongoose = require('mongoose');

const usuarioSchema = mongoose.Schema({
    folio: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
    nombreUsuario: {
        type: String,
        required: true
    },
    apePaterno: {
        type: String,
        required: true
    },
    apeMaterno: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        required: true
    },
    empresa: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    }
}, {
    collection: 'Usuario' // especificar el nombre de la colección
    
});


module.exports = mongoose.model('Usuario', usuarioSchema);
