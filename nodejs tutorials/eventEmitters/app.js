const EventEmitter = require('events'); //El módulo events está incluido internamente en node.js
const eventEmitter = new EventEmitter(); //Creamos una instancia de EventEmitter

/*
Con el método on creamos un listener de eventos, el primer parámetro es el evento por el cual se van a ejecutar acciones y el segundo
es la función que se va a ejecutar
*/
eventEmitter.on('tutorial', (num1, num2) => {
    console.log(num1 * num2);
});

eventEmitter.emit('tutorial', 5, 10);

/*
El método emit devuelve true si el evento al que se está llamando tiene un listener y false si no lo tiene
*/
if(eventEmitter.emit('tutorial')) console.log('Este evento tiene listeners');
else console.log('Este evento no tiene listeners');

/*
Creamos una clase Persona que hereda de EventEmitter
*/
class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

/*
Al crear una nueva instancia de Persona llamada fran, también estamos creando una instancia de EventEmitter por la herencia
entonces podemos usar todos sus métodos
 */
let fran = new Person('Fran');
fran.on('name', () => {
    console.log('Mi nombre es ' + fran.name);
});

let luke = new Person('Luke');
luke.on('name', () => {
    console.log('Mi nombre es ' + luke.name);
});

/*
Al crear dos instancias de persona, cuando se llama el evento este se ejecuta sincronicamente, primero fran luego luke
*/
fran.emit('name');
luke.emit('name');