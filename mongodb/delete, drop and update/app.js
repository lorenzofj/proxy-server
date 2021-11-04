const mongodb = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/"

//DELETE DOCUMENT
/*
Para borrar un registro o documento se usa el método deleteOne().
El primer párametro que toma es un objeto query que define el documento a borrar.
Si el método encuentra más de un registro solo borra el primero encontrado.
*/
mongodb.connect(url, (error, db) => {
    if(error) throw error;
    const dbo = db.db("EmpresaDB");

    const query = {address: 'Mountain 21'};

    dbo.collection("empleados").deleteOne(query, (error, obj) => {
        if(error) throw error;
        console.log(`${obj.deletedCount} documento/s eliminado/s`); //deletedCount devuelve la cantidad de registros que se eliminaron
        console.log(obj);
        db.close();
    });
});

//DELETE MANY
/*
Para borrar más de un documento se use el método deleteMany().
El primer párametro que toma es un objeto query que define los documentos a borrar.
Se pueden usar expresiones regulares.
*/
mongodb.connect(url, (error, db) => {
    if(error) throw error;
    const dbo = db.db("EmpresaDB");

    const query = {address: /^O/};

    dbo.collection("empleados").deleteMany(query, (error, obj) => {
        if(error) throw error;
        if(obj.deletedCount != 0) console.log(`${obj.deletedCount} documento/s eliminado/s`);
        else console.log('Ningún documento fue eliminado');
        db.close();
    });
});

//DROP COLLECTION
/*
El método drop() toma una función callback que contiene un objeto error y otro resultado como parámetros.
El objeto resultado retorna true si una colección se eliminó exitosamente, si no retorna falso.
*/
mongodb.connect(url, (error, db) => {
    if(error) throw error;
    const dbo = db.db("EmpresaDB");

    dbo.collection("empleados").drop((error, res) => {
        if(error) throw error;
        if(res) console.log('Colección eliminada!');
        db.close();
    });
});

//UPDATE 
/*
El método updateOne() se usa para hacer un update de un único documento.
El primer párametro que recibe es un objeto query que define qué documento actualizar.
Si el método encuentra más de un documento solo hace update del primero encontrado.
*/
mongodb.connect(url, (error, db) => {
    if(error) throw error;
    const dbo = db.db("EmpresaDB");

    const query = {address: "Valley 345"};
    //const query2 = {name: /^S/}; Se pueden utilizar expresiones regulares para alcanzar varios registros a actualizar
    const nuevosValores = {$set: {name:"Mickey", address:"Canyon 124"}}; //Se pueden actualizar todos los campos o solo los deseados

    dbo.collection("empleados").updateOne(query, nuevosValores, (error, res) => { //Para actualizar varios registros se utiliza updateMany()
        if(error) throw error;
        console.log("1 documento actualizado");
        console.log(res);
        db.close();
    });
});