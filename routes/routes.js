

const pool = require('../data/config');

const router = function(app) {
    app.get('/', function(request, response){
        response.send({
            message: 'Bienvenido a Node.js Express REST API'
        });
    });

    app.get('/users', function(request, response){
        pool.query('SELECT * FROM users', function(error, result){
            if (error)
                throw error;
            
            response.send(result);
        });
    });

    app.get('/users/:id', function(request, response){
        const {id} = request.params;

        pool.query(`SELECT * FROM users WHERE id = ${id}`, function(error, result){
            if (error)
                throw error;
            
            response.send(result);
        });
    });

    app.post('/users', function(request, response){
        const {nombre, apellido} = request.body;
        pool.query(`INSERT INTO users VALUES('${nombre}', '${apellido}')`, function(error, result){
            if (error)
                throw error;
            
            response.status(201).send(`User added.`);
        });
    });

    app.put('/users/:id', function(request, response){
        const {id} = request.params;
        const {nombre, apellido} = request.body;

        pool.query(`UPDATE users SET nombre = '${nombre}', apellido = '${apellido}' WHERE id = ${id}`, function(error, result){
            if (error)
                throw error;
            
            response.send(`User updated successfully.`);
        });
    });

    app.delete('/users/:id', function(request, response){
        const {id} = request.params;

        pool.query(`DELETE FROM users WHERE id = ${id}`, function(error, result){
            if (error)
                throw error;
            
            response.send(`User deleted.`);
        });
    });

};

module.exports = router;

