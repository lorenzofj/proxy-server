/*
Los streams nos permite leer y escribir datos/información de manera más eficiente.
Leen y escriben en bloques en lugar de hacerlo todo al mismo tiempo.
*/
const filesystem = require('fs');

/*
El módulo zlib sirve para la compresión y descompresión de archivos
*/

const zlib = require('zlib');

//-------------------------------------------------------------------------------------------------------------------

/*
El objeto readStream hereda de la clase eventEmitter por lo que podemos escuchar eventos y ejecutar alguna acción.
*/
const readStream = filesystem.createReadStream('./text.txt', 'utf-8');
const writeStream = filesystem.createWriteStream('new text.txt.gz');
const gzip = zlib.createGzip(); //Gzip para comprimir

//-------------------------------------------------------------------------------------------------------------------

const readStream = filesystem.createReadStream('./new text.txt.gz');
const writeStream = filesystem.createWriteStream('uncompressed.txt');
const gunzip = zlib.createUnzip(); //Gunzip para descomprimir

//-------------------------------------------------------------------------------------------------------------------
readStream.on('data', (chunk) => { //Cada vez que leemos información este evento se va a ejecutar
    writeStream.write(chunk);
});

/*
Hay una manera más eficiente de realizar el método de arriba y es el siguiente
*/

readStream.pipe(writeStream);

/*
Y para comprimirlo se le agrega otro pipe junto con gzip
*/

readStream.pipe(gunzip).pipe(writeStream); //Cambiar gzip por gunzip para descomprimir