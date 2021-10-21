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