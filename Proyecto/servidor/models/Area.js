const mongoose = require('mongoose');

const usuarioSchema = mongoose.Schema({
    nombreArea: {
        type: String,
        required: true
    }
}, {
    collection: 'Area' // especificar el nombre de la colección
});

module.exports = mongoose.model('Area', usuarioSchema);
