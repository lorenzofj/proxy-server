var http = require('http');
var fecha = require('./miprimermodulo');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("La fecha y hora actuales son: " + fecha.miFecha());
    res.end('Hello World"');
}).listen(8081);