const Area = require("../models/Area");

exports.obtenerAreas = async(req,res) =>{
    try {
        const areas = await Area.find();
        res.json(areas);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error!!! :(');
    }
}

