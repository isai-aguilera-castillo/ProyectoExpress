
/*
const mysql = require('mysql');

// set database connection credentials 

const config = {
    host: 'localhost',
    user: 'root',
    password: 'Castillo20$', 
    database: 'API'
};

//ctreate a my sql pool

const pool = mysql.createPool(config);

//export the pool 

module.exports = pool;

*/

const sql = require('mssql');

//Set database conecction credentials
const config = {
    server: 'localhost',
    user: 'aguilera',
    password: 'qwerty',
    database: 'api',
    options: {
        trustServerCertificate: true
    }
};

//create a MSSQL pool
const pool = {
    query: function(query, callback) {
        sql.connect(config).then((pool) => {
            return pool.query(query);
        }).then(result => {
            callback(null, result);
        }).catch(err => {
            callback(err, null);
        });
    }
}

// Export the pool
module.exports=pool;