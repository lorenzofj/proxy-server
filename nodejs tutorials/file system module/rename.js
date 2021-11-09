const filesystem = require('fs');

/*
El método rename toma tres argumentos, el primero el nombre del archivo que queremos renombrar,
el segundo el nuevo nombre que va a tener y el tercero la función callback
*/
filesystem.rename('example.txt', 'example-renamed.txt', (error) => {
    if(error) console.log(error);
    else console.log('Successfully renamed the file.');
});