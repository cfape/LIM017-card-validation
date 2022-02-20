import validator from './validator.js';


let validButton = document.getElementById('validButton');
    validButton.addEventListener('click', playClick);
let creditCardNumber = document.getElementById('cardNumber').value;

    function playClick(){
    //Sólo funciona con números y no con letras
    if (isNaN(creditCardNumber)) {
        return false;
    }
    let finalArray = validator.isValid(creditCardNumber).value;
    let message = document.getElementById('message1');
        if (creditCardNumber){
        //let hiddenCard = validator.maskify(cardNumber);
    }
        if (finalArray){
            message.innerText === true;
            message.innerText = 'Número de tarjeta válido.';
            message.classList.add('valid-text');
        }   else {
            message.innerText === false;
            message.innerText = 'Número de tarjeta no válido. Por favor intente nuevamente.';
            message.classList.add('error-text');
            message.classList.remove('innerText');
        //console.log(finalArray);
        }
    }
    console.log(validator);
















