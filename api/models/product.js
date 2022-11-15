const db = require('../config/config');

const Product = {};

Product.getAll = () => {
    const sql = `
    SELECT
	    *
    FROM
	    productos
    `;

    return db.manyOrNone(sql);
}

module.exports = Product;