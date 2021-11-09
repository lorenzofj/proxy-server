const filesystem = require('fs');

/*
El método appendFile nos permite reescribir el contenido de un archivo ya existente.
Toma tres argumentos, el primero el nombre del archivo que vamos a reescribir,
el segundo argumento es el texto que vamos a agregar y el tercero es la función callback
*/
filesystem.appendFile('example-renamed.txt', 'Some data being appended', (error) => {
    if(error) console.log(error);
    else console.log('Successfully appended data to the file');
});