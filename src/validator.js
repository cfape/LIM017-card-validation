
//Objeto validator contiene 2 funciones
const validator = {
    isValid: function(creditCardNumber) {
    let arrayNum1 = Array.from(creditCardNumber)
    //Nuevo array de números de tarjeta
    let arrayNum2 = []
    //let totalSum = 0
    for (let i = 0; i < arrayNum1.length; i++) {
    arrayNum2.push(arrayNum1[i]);
    //console.log('arrayNum2');
    }
    },

    maskify: function(creditCardNumber) {
    return creditCardNumber;
    },
    }
export default validator;
