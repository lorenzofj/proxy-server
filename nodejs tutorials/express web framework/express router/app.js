/*
El router de express nos permite separar las rutas en diferenes archivos. Esto hace que el código sea más facil de administrar
*/

const express = require('express');
const path = require('path');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));
app.set('view engine', 'ejs');

const people = require('./routes/people');

app.use('/people', people);

app.listen(8080);