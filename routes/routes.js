// cargue la conexion del grupo MySQl 
const { response } = require('express');
const { request } = require('express');
const pool= require('../data/config');

//ruta de la app 

const router = app => {
//mostrar mesnaje de la bienvenida de root 

app.get('/', (request, response) => {

    response.send({
        message: 'Bienvendio a Node.js Express API!'
    });
});

// mostrar todos los usarios 

app.get ('/users', (request, response) => {

    pool.query('SELECT *FROM users', (error, result) => {
        if (error) throw error; 
        response.send(result);
    });

});



}