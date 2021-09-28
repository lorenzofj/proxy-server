const sum = (num1, num2) => num1 + num2;
const PI = 3.14;
class SomeMathObject{
    constructor(){
        console.log('Object created!');
    };
};

/*module.exports.sum = sum;
module.exports.PI = PI;
module.exports.SomeMathObject = SomeMathObject;*/

//Si se van a exportar diferentes funciones, clases, etc se puede simplificar el código

module.exports = {sum : sum, PI : PI, SomeMathObject : SomeMathObject};