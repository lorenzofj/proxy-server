const express = require('express');
const path = require('path'); //Módulo de node que se encarga de las rutas en links
const app = express();
/*
use recibe dos parámetros, el primero el alias de la carpeta (para que las personas fuera del servidor no sepan como se llama realmente)
donde estan nuestros archivos estáticos.
El segundo parámetro es una función middleware
*/
app.use('/public', express.static(path.join(__dirname, 'static files')));
/*
dirname nos señala donde está el archivo de aplicación principal (app.js).
El segundo parámetro el nombre de la carpeta real donde se encuentran los archivos
*/

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static files', 'CV.html'));
});

app.listen(8080);