/*
Middleware es el código que se ejecuta entre la petición de un usuario y el servidor mismo
*/

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

/*
Esta linea es una función middleware. Body parser chequea que el usuario esté enviando un archivo JSON, lo procesa y lo manda al servidor
*/
app.use(bodyParser.json());

//Si no ponemos el primer parámetro, todas las peticiones van a pasar por este middleware. Con el parámetro filtramos para que sea con ciertas rutas
app.use('/example', (req, res, next) => { //El método next tiene que ser invocado cuando creamos un middleware personalizado
    console.log(req.url, req.method);
    //req.name = 'Francisco';
    next(); //Este método le hace saber a express que ya terminó de procesar la petición. Si no llamamos a este método se produce un time out en el servidor
});

app.get('/', (req, res) => {
    //console.log(req.name);
    res.send('MiddleWare');
});

app.listen(8080);