const { string, preferences } = require('joi');
const Joi = require('joi');

const arrayString = ['banana', 'bacon', 'beer'];
const arrayObjects = [{example: 'example1'}, {example: 'example2'}];

const userInput = {
    personalInfo: {
        streetAddress: '123123123',
        city: 'cordoba',
        state: 'Córdoba'
    },
    preferences: arrayString
};

const personalInfoSchema = Joi.object({
    streetAddress : Joi.string().trim().required(),
    city : Joi.string().trim().required(),
    state : Joi.string().trim().required()
});

const preferencesSchema = Joi.array().items(Joi.string()); //items toma como argumento el esquema que queremos, en este caso un array de strings

//Juntamos los 2 esquemas anteriores en uno solo
const schema = Joi.object({
    personalInfo : personalInfoSchema,
    preferences : preferencesSchema
});

Joi.assert(userInput, schema, (error, result) => {
    if(error) console.log(error);
    else console.log(result);
});

/*schema.validate(userInput, schema, (error, result) => {
    if(error) console.log(error);
    else console.log(result);
});*/