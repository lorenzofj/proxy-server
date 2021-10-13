/*
npm init --yes
Con este comando creamos el archivo package.json y nos salteamos la configuración
*/

const express = require('express'); //Cuando importamos express nos devuelve una función y esta nos devuelve un objeto con métodos

const app = express(); //La convención es poner app a la variable del objeto express

app.get('/', (req, res) => {
    res.send('Hello world with express');
});

app.get('/example', (req, res) => {
    res.send('new route example');
});

/*
Ruta con parámetros y query
Una ruta con parámetros la debemos usar cuando si o si necesitamos los parámetros, por ejemplo un formulario.
En caso de alguno ser opcional ahi si podemos usar el query.
*/
app.get('/example/:name/:age', (req, res) => {
    console.log(req.params);
    console.log(req.query); //En el link poner /example/fran/46?tutorial=paramstutorial. Para agregar más parámetros al query poner &
    res.send(req.params.name + " : " + req.params.age);
});

app.listen(8080);