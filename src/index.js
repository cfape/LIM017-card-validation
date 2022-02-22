import validator from './validator.js';

    function playClick(){
    //Sólo funciona con números y no con letras
    let creditCardNumber = document.getElementById('cardNumber').value;
    if (isNaN(creditCardNumber)) {
        return false;
    }
    let hideNum = validator.maskify(creditCardNumber);
    console.log(hideNum);
    let validationResult = validator.isValid(creditCardNumber);
    console.log(validationResult);

    let messageNum = document.getElementById('messageNum');
    if (validationResult){
            messageNum.innerText = hideNum;
            messageNum.classList.add('valid-text');
        }   else {
            messageNum.innerText = hideNum;
            messageNum.classList.add('error-text');
            }
    let message = document.getElementById('messageText');
    if (validationResult){
            message.innerText = 'true';
            message.innerText = '¡Bienvenida! Número de tarjeta válida.';
            message.classList.add('valid-text');
        }   else {
            message.innerText = '';
            message.innerText ='Número de tarjeta no válido. Por favor intente nuevamente. ';
            message.classList.add('error-text');
        }
    let nameUser = document.querySelector();
    console.log(nameUser);
    }
    let validButton = document.getElementById('validButton');
    validButton.addEventListener('click', playClick);


















