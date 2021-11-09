/*
El módulo file system nos permite trabajar con archivos del sistema como crear, leer, borrar archivos, crear carpetas, etc.
*/

const filesystem = require('fs');

//Crear un archivo
/*
El método writeFile toma tres argumentos, el primero cual va a ser el nombre del archivo (string) y hay que agregar el tipo
de archivo (ej: .txt), el segundo es lo que queremos escribir en el archivo (string) y el tercero es un parámetro de error
en caso de que se produzca alguno junto con una función callback 

*/
filesystem.writeFile('example.txt', "this is an example...", (error) => {
    if(error) console.log(error);
    else{
        console.log('File successfully created.');

        /*readFile nos permite leer un archivo ya existente, toma como primer argumento el nombre del archivo que deseamos leer,
          el segundo argumento es el tipo de codificación que queremos usar (en este caso UTF-8)
          y el tercero es una función callback que toma dos argumentos*/
        filesystem.readFile('example.txt', 'utf-8', (error, file) => {
            if(error) console.log(error);
            else console.log(file);
        });
    }
});