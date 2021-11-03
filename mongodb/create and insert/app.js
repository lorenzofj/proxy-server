const mongodb = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/"

//CREACIÓN DE LA BASE DE DATOS
mongodb.connect(url, (error, db) => {
    if(error) throw error;
    console.log('Base de datos creada!');
    db.close();
});

/*
Datos para recordar:
- MongoDB no crea la base de datos hasta que no tenga algún contenido.
- MongoDB espera a que se haya creaddo una tabla, o documento para crear la base de datos.
*/

//CREACIÓN DE UNA TABLA
mongodb.connect(url, (error, db) => {
    if(error) throw error;
    const dbo = db.db("nombreBaseDeDatos"); //crea la base de datos
    dbo.createCollection("empleados", (error, res) => {
        if(error) throw error;
        console.log('Tabla creada!');
        db.close();
    });
});

/*
Datos para recordar:
- MongoDB no crea una tabla (colección) hasta que no tenga algún contenido.
*/

//INSERT EN UNA TABLA
mongodb.connect(url, (error, db) => {
    if(error) throw error;
    const dbo = db.db("EmpresaDB");

    const document = {name: "Francisco", address: "Av. Siempre Viva 123"}; //documento que se va a insertar en la tabla empleados
    //El método collection busca si existe una tabla con el nombre empleados, si no existe crea la tabla implicitamente
    dbo.collection("empleados").insertOne(document, (error, res) => { //insertOne para insertar un solo documento, insertMany para muchos
        if(error) throw error;
        console.log('Insert realizado correctamente');
        db.close();
    });
});

//INSERT DE MULTIPLES REGISTROS EN UNA TABLA
mongodb.connect(url, (error, db) => {
    if (error) throw error;
    const dbo = db.db("EmpresaDB");
    const document = [
        { name: 'John', address: 'Highway 71' },
        { name: 'Peter', address: 'Lowstreet 4' },
        { name: 'Amy', address: 'Apple st 652' },
        { name: 'Hannah', address: 'Mountain 21' },
        { name: 'Michael', address: 'Valley 345' },
        { name: 'Sandy', address: 'Ocean blvd 2' },
        { name: 'Betty', address: 'Green Grass 1' },
        { name: 'Richard', address: 'Sky st 331' },
        { name: 'Susan', address: 'One way 98' },
        { name: 'Vicky', address: 'Yellow Garden 2' },
        { name: 'Ben', address: 'Park Lane 38' },
        { name: 'William', address: 'Central st 954' },
        { name: 'Chuck', address: 'Main Road 989' },
        { name: 'Viola', address: 'Sideway 1633' }
    ];

    dbo.collection("empleados").insertMany(document, (error, res) => {
        if(error) throw error;
        console.log(`Cantidad de registros insertados: ${res.insertedCount}`);
        console.log(res);
        db.close();
    });
});

/*
El objeto Resultado (res):
Cuando hacemos un insert de varios registros, el método insertMany nos devuelve un objeto (res).
Este objeto contiene información sobre como la inserción afectó a la base de datos.
*/

//INSERT CON ID DEFINIDO
mongodb.connect(url, (error, db) => {
    if(error) throw error;
    const dbo = db.db("EmpresaDB");

    const document = [
        {_id: 20, name: 'Vino'},
        {_id: 21, name: 'Vodka'},
        {_id: 22, name: 'Cerveza'},
        {_id: 23, name: 'Fernet'}
    ];

    dbo.collection("productos").insertMany(document, (error, res) => {
        if(error) throw error;
        console.log('Insert realizado correctamente');
        console.log(res.insertedIds);
        db.close();
    });
});