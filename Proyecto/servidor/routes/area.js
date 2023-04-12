const express = require('express');
const router = express.Router();
const areaController = require('../controllers/areaController');

//api rutas
router.get('/', areaController.obtenerAreas);


module.exports = router;