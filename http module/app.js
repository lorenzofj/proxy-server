const http = require('http');

/*
createServer toma como parámetro una función callback donde colocan los objetos require y response.
El objeto require es lo que el usuario nos pide a nosotros(server).
El objeto response es lo que nosotros(server) le respondemos al usuario.
*/
const server = http.createServer((req, res) => {
    //Con este if else podemos escuchar y devolver una respuesta solo si se ingresa desde cierto url
    if(req.url === '/'){
        res.write('Hello world from NodeJs!!');
        res.end(); //Para enviar la respuesta hay que poner al final el método end.
    }
    else{
        res.write('Using some other domain');
        res.end();
    }
});

/*
Por último para arrancar el servidor le tenemos que decir a NodeJs en que puerto tiene que escuchar las peticiones de los usuarios
*/
server.listen('8080');