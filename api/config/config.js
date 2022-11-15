const promise = require('bluebird');
const options = {
    promiseLib: promise,
    query: (e) => {}
}
const pgp = require('pg-promise')(options);
const types = pgp.pg.types;
types.setTypeParser(1114, function(stringValue) {
    return stringValue;
});

const databaseConfig = {
    'host': 'containers-us-west-40.railway.app',
    'port': 6761,
    'database': 'instacrops_db',
    'user': 'postgres',
    'password': 'evr4BOkpbIOMCLnoFT6X'
};

const db = pgp(databaseConfig);

module.exports = db;