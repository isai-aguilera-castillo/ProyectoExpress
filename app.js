/*
var express = require ('express');
var app = express ();

app.get ('/hola', function (req, res){
    res.send('Hola Mundo!');
});

app.get ('/adios', function (req, res){
    res.send('adios Mundo!');
});

app.listen(3000, function(){
    console.log('Aplicacion ejemplo. escuchando el puerto 3000!');
});

*/

//requiere packages and set the port
const express = require('express');
const port = 3002;
// para permitir el manejo de POST y PUT 

const bodyParser = require ('body-parser');
const routes = require ('./routes/routes')
const app = express (); 

//usar Node.js body parsing middleware 
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({
     extended: true,
 })); 

 routes(app);
 //inciiar servidor 

 const server = app.listen(port, (error)=>{
        if (error) return console.log(`Error: ${error}`);
        console.log(`El servidor escucha en el puerto ${server.address().port}`);

 });
