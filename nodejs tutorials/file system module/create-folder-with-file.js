const filesystem = require('fs');

filesystem.mkdir('directory with file', (error) => {
    if(error) console.log(error);
    else{
        filesystem.writeFile('./directory with file/file.txt', 'Hello with Node.js!', (error) => {
            if(error) console.log(error);
            else console.log('Folder and file successfully created!');
        });
    }
});

/*
Para eliminar una carpeta con un archivo dentro primero hay que eliminar el archivo con
el método unlink y luego eliminar la carpeta con el método rmdir
*/

filesystem.unlink('./directory with file/file.txt', (error) => {
    if(error) console.log(error);
    else{
        filesystem.rmdir('folder with file', (error) => {
            if(error) console.log(error);
            else console.log('folder and file deleted!');
        });
    }
});

/*
Para eliminar una carpeta con varios archivos dentro primero hay que saber cuantos archivos hay dentro
de la carpeta con el método readdir que recibe dos argumentos. El primero es el nombre de la carpeta que va a leer
y el segundo una función callback
*/

filesystem.readdir('directory with files', (error, files) => { //Crear una carpeta llamada directory with files y agregar 2 archivos
    if(error) console.log(error);
    else{
        //console.log(files); //Para ver los archivos en la carpeta
        for(let file of files){
            filesystem.unlink('./directory with files/' + file, (error) => {
                if(error) console.log(error);
                else console.log('Successfully deleted the file');
            });
        }
    };
});