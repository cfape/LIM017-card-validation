import validator from './validator.js';


let validButton = document.getElementById('validButton');
    validButton.addEventListener('click', playClick);
let creditCardNumber = document.getElementById('cardNumber').value;

    function playClick(){
    //Sólo funciona con números y no con letras
    if (isNaN(creditCardNumber)) {
        return false;
    }
    let message = document.getElementById('message1');
    let finalArray = validator.isValid(creditCardNumber).value;
    let hideNum = validator.maskify(creditCardNumber).value;
    console.log(hideNum);
        if (creditCardNumber){
        //
    }
        if (finalArray){
            message.innerText = true;
            message.innerText = 'Número de tarjeta válido.';
            message.classList.add('valid-text');
        }   else {
            message.innerText = '';
            message.innerText = 'Número de tarjeta no válido. Por favor intente nuevamente.';
            message.classList.add('error-text');
            message.classList.remove('innerText');
        //console.log(finalArray);
        }
    }
    console.log(validator);
















