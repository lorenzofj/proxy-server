const filesystem = require('fs');

/*
El método unlink permite borrar un archivo existente deseado.
Toma dos argumentos, el primero el nombre del archivo a borrar
y el segundo una función callback
*/
filesystem.unlink('example-renamed.txt', (error) => {
    if(error) console.log(error);
    else console.log('Successfully deleted the file');
});