import validator from './validator.js';

    function playClick(){
    let creditCardNumber = document.getElementById('cardNumber').value;
    if (isNaN(creditCardNumber)) {
        return false;
    }
    let hideNum = validator.maskify(creditCardNumber);
    //for (let i = 0; i < creditCardNumber.length; i++){
    //if (i == 3 || i == 7 || i == 11) hideNum.push("-");
    //}
    console.log(hideNum);
    let dataName = document.getElementById('partner').value;
    document.getElementById('messagePartner').innerHTML = dataName;
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
    }
    let validButton = document.getElementById('validButton');
    validButton.addEventListener('click', playClick);


















