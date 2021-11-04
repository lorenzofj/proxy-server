const mongodb = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/"

//SELECT DE UN REGISTRO (find One)
mongodb.connect(url, (error, db) => {
    if(error) throw error;
    const dbo = db.db("EmpresaDB");

    dbo.collection("empleados").findOne({}, (error, result) => {
        if(error) throw error;
        console.log(`Registro encontrado: nombre => ${result.name}, dirección => ${result.address}`);
        db.close();
    });
});

//SELECT DE TODOS LOS REGISTROS (find)
mongodb.connect(url, (error, db) => {
    if(error) throw error;
    const dbo = db.db("EmpresaDB");

    dbo.collection("empleados").find({}).toArray((error, result) => {
        if(error) throw error;
        console.log(result);
        db.close();
    });
});

//FIND SOME
/*
El segundo parámetro del método find() es el objeto "proyeccion", que describe que campos van a ser incluidos en el resultado.
Este párametro es opcional, y si se omite, todos los campos van a ser incluidos en el resultado.

IMPORTANTE: no está permitido especificar 0 y 1 al mismo tiempo en el mismo objeto (excepto que sea el campo _id).
Si se especifica un campo con 0, todos los demás deben tener 1 y vice versa.
*/
mongodb.connect(url, (error, db) => {
    if(error) throw error;
    const dbo = db.db("EmpresaDB");

    dbo.collection("empleados").find({}, { projection: {address:0}}).toArray((error, result) => { //este caso omite el campo address
        if(error) throw error;
        console.log(result);
        db.close();
    });
});

//QUERY
/*
Cuando queremos filtrar los resultados de una consulta usamos query.
Este va como primer párametro en el método find()..
Se puede filtrar con expresiones regulares.
*/
mongodb.connect(url, (error, db) => {
    if(error) throw error;
    const dbo = db.db("EmpresaDB");

    const query = {address: "Av. Siempre Viva 123"};
    const query2 = {address: /^S/};

    dbo.collection("empleados").find(query).toArray((error, result) => {
        if(error) throw error;
        if(result.length != 0) console.log(result);
        else console.log("No se encontraron documentos con los filtros deseados");
    });

    dbo.collection("empleados").find(query2).toArray((error, result) => {
        if(error) throw error;
        if(result.length != 0) console.log(result);
        else console.log("No se encontraron documentos con los filtros deseados");
        db.close();
    });
});

//SORT
/*
Igual que order by en SQL
El método sort() toma un parámetro, un objeto que define el orden.
*/

mongodb.connect(url, (error, db) => {
    if(error) throw error;
    const dbo = db.db("EmpresaDB");

    //Poner 1 para ordenar de forma ascendente y -1 para descendente
    const order = {name:1};

    dbo.collection("empleados").find().sort(order).toArray((error, result) => {
        if(error) throw error;
        console.log(result);
        db.close();
    });
});