const Product = require('../models/product');

module.exports = {
    async getAll(req, res, next){
        res.header("Access-Control-Allow-Origin", "*");
        try {
            const data = await Product.getAll();
            console.log(`Productos: ${data}`);
            return res.status(201).json(data);
        } 
        catch (error) {
            console.log(`Error: ${error}`);
            return res.status(501).json({
                success: false,
                message: 'Error al obtener los usuarios'
            });
        }
    }
};