const mongodb = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/"

//LIMIT
/*
El método limit() es como TOP en SQL.
Toma como único argumento la cantidad de registros que va a devolver.
*/
mongodb.connect(url, (error, db) => {
    if(error) throw error;
    const dbo = db.db("EmpresaDB");

    dbo.collection("empleados").find().limit(5).toArray((error, result) => {
        if(error) throw error;
        console.log(result);
        db.close();
    });
});

//JOIN
/*
MongoDB no es una base de datos relacional pero se puede realizar un left outer join usando $lookup.
$lookup nos permite especificar a que coleccion le queremos aplicar join con otra coleccion y que registros deben coincidir.
*/

//creamos una tabla pedidos
mongodb.connect(url, (error, db) => {
    if(error) throw error;
    const dbo = db.db("EmpresaDB");

    const document = {_id: 1, product_id: 154, status: 1};
    dbo.collection("pedidos").insertOne(document, (error, res) => {
        if(error) throw error;
        console.log(res);
        db.close();
    });
});

//creamos una tabla productos
mongodb.connect(url, (error, db) => {
    if(error) throw error;
    const dbo = db.db("EmpresaDB");

    const document = [
        {_id: 154, name: 'Chocolate'},
        {_id: 155, name: 'Vainilla'},
        {_id: 156, name: 'Frutilla'}
    ];
    dbo.collection("productos").insertMany(document, (error, res) => {
        if(error) throw error;
        console.log(res);
        db.close();
    });
});

//hacemos el join
mongodb.connect(url, (error, db) => {
    if(error) throw error;
    const dbo = db.db("EmpresaDB");

    dbo.collection("pedidos").aggregate([
        {$lookup:
            {
                from: 'productos',
                localField: 'product_id',
                foreignField: '_id',
                as: 'detallesordenes'
            }
        }
    ]).toArray((error, res) => {
        if(error) throw error;
        console.log(JSON.stringify(res));
        db.close();
    });
});