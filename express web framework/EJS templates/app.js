/*
EJS es un lenguaje de templates. Nos permite crear páginas web dinámicas.
*/

const express = require('express');
const path = require('path');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));

//Express busca por defecto una carpeta con el nombre views
app.set('view engine', 'ejs');

app.get('/:userQuery', (req, res) => { //URL parametrizado
    res.render('index', {data : {userQuery: req.params.userQuery,
                                 searchResults : ['Quilmes', 'Stella Artois', 'Heiniken', 'Imperial'],
                                 loggedIn : true,
                                 username : 'Fran'}}); //Le pasamos a la vista un objeto que contiene los datos que queremos mostrar
});

app.listen(8080);

/*
Al ejecutar el servidor pasar por parametro en el URL por ejemplo /teclado
*/