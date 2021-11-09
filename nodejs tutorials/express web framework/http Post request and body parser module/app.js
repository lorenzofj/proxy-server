const express = require('express');
const path = require('path');

/*
El módulo body-parser nos permite analizar y transformar los datos que ingresan por POST
*/
const bodyParser = require('body-parser');

const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({extended: false}));
/*
Nos permite analizar la URL con los datos del form.
La parte extended: false está en false porque no estamos utilizando objetos complejos, solo tenemos un email y password que son strings.
*/

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

/*
El primer parámetro de app.post es la ruta.
El segundo argumento es una función callback
*/
app.post('/', (req, res) => {
    console.log(req.body); //req.body nos devuelve un objeto con el email y la password.
    //Con este objeto se puede mandar o recibir datos con la base de datos. Luego debemos enviar una respuesta al usuario
    res.send('successfully posted data');
});

app.listen(8080);