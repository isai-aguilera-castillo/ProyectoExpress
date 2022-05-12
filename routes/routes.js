// cargue la conexion del grupo MySQl 
const { response } = require('express');
const { request } = require('express');
const res = require('express/lib/response');
const { get } = require('express/lib/response');
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

//mostrar un solo usuario por ID 
app,get('/users/:id', (request, response) =>{
    const id = request.params.id;

    pool.query('SELECT * FROM users WHERE id = ?', id, (error, result) => {
        if (error) throw error;

        response.send(result);
    });
});

// Agregar un nuevo usario 

app.post('/users', (request, response) => {
 
    pool.query('INSERT INTO users SET ?', request.body, (error, result) => {

        if (error) throw error; 

        response.status(201).send(`User added with ID: ${result, insertId}`);
    });

});

//actualizar un usario existente 

app.put ('/users/:id', (request, response) => {
    const id = request.params.id;
  pool.query('UPDATE users SET? WHERE id=?', [request.body, id], (error, result) => {

    response.send('User updated successfully.');
  });

});



//eliminar un usario 
app.delete('/users/:id', (request, response) => {
    const id = request.params.id;
    pool.query('DELETE FROM users WHERE id = ?', id, (error, result) => {

       if (error) throw error;
       response.send('User deleted');

    });
});


}

//Exportortar el router 
module.exports = router;