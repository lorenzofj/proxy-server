const express = require('express');
const path = require('path');
const Joi = require('joi');
const bodyParser = require('body-parser');

const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({extended : false}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.post('/', (req, res) => {
    console.log(req.body);

    function validateUser(user){

        const schema = Joi.object().keys({ //Creamos un schema, es un plano con las reglas que tienen que cumplir los campos email y pass para ser aceptados
            email : Joi.string().trim().email().required(),
            pass : Joi.string().min(5).max(10).required()
            /*
            string refiere a que el campo email debe ser un string,
            trim recorta el string en caso de que haya espacios antes o al final,
            email valida que lo ingresado tenga formato de email,
            min refiere a que la pass debe tener al menos 5 caracteres,
            max refiere a que la pss debe tener máximo 10 caracteres,
            required retorna error en caso de que el campo este vacío.
            */
        });

        return schema.valid(user);
    }
    
    const response = validateUser(req.body);

    if (response.error) {
        console.log(response.error)
    }
    else {
        console.log("Validated Data")
    }
    /*Joi.valid(req.body, schema, (error, result) => {
        if(error){
            console.log(error);
            res.send('an error has occurred');
        }
        console.log(result);
        res.send('successfully submited data');
    });*/
});

app.listen(8080);