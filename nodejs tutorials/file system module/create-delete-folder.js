const filesystem = require('fs');

/*
El método mkdir quiere decir make directory (crear directorio) y toma dos argumentos.
El primero es el nombre del directorio (string) y el segundo una función callback
*/
filesystem.mkdir('directory created', (error) => {
    if(error) console.log(error);
    else{
        //El método rmdir se usa para eliminar una carpeta
        filesystem.rmdir('directory created', (error) => {
            if(error) console.log(error);
            else console.log('Successfully deleted the folder');
        });
    }
});

