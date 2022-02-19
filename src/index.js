import validator from './validator.js';
let validButton = document.getElementById('validButton');
validButton.addEventListener('click', () => {
    let creditCardNumber = document.getElementById('cardNumber').value;
    let cardNumber = document.getElementById('cardNumber').value;
    if (isNaN(cardNumber)) {
        return false;
    }
    //console.log(creditCardNumber);
    let message = document.getElementById('message1')
    if (creditCardNumber === ''){
        message.innerText = '*Por favor ingresa tu número de tarjeta.';
        message.innerText = '*Por favor ingrese sólo los números de su tarjeta.';
        message.classList.add('error-text');
    } else {
        validator.isValid(creditCardNumber);
        message.innerText = "";
        message.classList.remove('error-text');
        }

    let message2 = document.getElementById('validMessage');
    if (creditCardNumber === 0){
        message2.innerText = 'Número de tarjeta válida.';
        message2.classList.add('valid-text');
    } else {
        validator.isValid(creditCardNumber);
        message2.innerText = 'Número de tarjeta no válida.'
        message2.classList.add('error-text');
        console.log(message2);
    }
    //console.log(finalValidation);
});
    //});

    //console.log (validator);
















