//Comando para validator

import validator from "validator.js";
//Llamando al DOM
let buttonNumberCard = document.getElementById('btn');
//Captura valores del input
buttonNumberCard.addEventListener('click',buttonValidCard);

function buttonValidCard() {
    let creditCardNumber = document.getElementById('numberCard').value;
    validator.isValid(creditCardNumber);
}

//console.log(validator);










