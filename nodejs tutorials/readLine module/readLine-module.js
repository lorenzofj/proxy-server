//Este módulo permite que recibamos y enviemos datos (input, output)
const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, output : process.stdout});

/*
Ejemplo: le preguntamos al usuario cuanto da la suma de dos números
*/

let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);
let answer = num1 + num2;

/*
La interfaz readline tiene un método llamado question.
Este recibe dos parámetros, el primero la pregunta (string) y el segundo una función callback que va a recibir el input del usuario
*/

rl.question(`What is ${ num1 } + ${ num2 }?\n`, (userInput) => {
    if(userInput.trim() == answer){
        rl.close(); //Este método cierra la interfaz readline, si no queda abierta esperando más input que no va a llegar
    }
    else{
        rl.setPrompt('Thats incorrect, please try again.\n') //setPrompt toma un argumento (string) que va a ser otra pregunta para el usuario (input)
        rl.prompt(); //Con el primer método seteamos la pregunta, con prompt lo ejecutamos
        rl.on('line', (userInput) => { //Al estar escuchando line creamos un loop hasta que la respuesta sea correcta
            if(userInput.trim() == answer){
                rl.close();
            }
            else{
                rl.setPrompt(`Your answer of ${ userInput } is incorrect, try again \n`)
                rl.prompt();
            }
        });
    }
});

/*
La interfaz readline es una instancia de la clase EventEmitter por ende podemos agregar un listener al método close por ejemplo
*/

rl.on('close', () => {
    console.log('Thats correct!');
});