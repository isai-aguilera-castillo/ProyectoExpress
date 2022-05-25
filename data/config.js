

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
