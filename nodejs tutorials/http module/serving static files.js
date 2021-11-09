const http = require('http');
const filesystem = require('fs');

http.createServer((req, res) => {
    const readStream = filesystem.createReadStream('./static/example.json');
    /*
        writeHead le indica al cliente que tipo de datos estoy esperando recibir.
        'text/html' para recibir páginas html, 'application/json' para archivos json, 'image/png' para imágenes
    */
    res.writeHead(200, {'Content-type': 'application/json'});
    readStream.pipe(res); //Indicamos a donde vamos a mandar el archivo, en este caso al cliente. el objeto res también es un writable stream
}).listen(8080);