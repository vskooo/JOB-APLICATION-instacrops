const ProductsController = require('../controllers/productsController');

module.exports = (app) => {

    app.get('/api/products/getAll', ProductsController.getAll);
    
}