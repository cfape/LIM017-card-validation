import validator from './validator.js';
let validButton = document.getElementById('validButton');
validButton.addEventListener('click', () => {
let creditCardNumber = document.getElementById('cardNumber').value;
let cardNumber = document.getElementById('cardNumber').value;
    if (isNaN(cardNumber)) {
        return false;
    }
//console.log(creditCardNumber);

    console.log(creditCardNumber);
    let message = document.getElementById('mensaje');
    if (creditCardNumber === "") {
        message.innerText = '*Por favor ingresa tu número de tarjeta.';
        message.innerText = '*Por favor ingrese sólo los números de la tarjeta.';
        message.classList.add('error-text');
    } else {
        validator.isValid(creditCardNumber);
        message.innerText = "";
        message.classList.remove('error-text');
        }
    });
//console.log (validator);
















