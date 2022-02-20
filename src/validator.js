//Objeto validator contiene 2 funciones
const validator = {
    isValid: function(creditCardNumber) {
    //Convertir número de tarjeta a Array
    let initialArray = Array.from(creditCardNumber);
    //console.log(initialArray);
    //Convertir los string del array a números
    let finalArray = [];
    for (let i = 0; i < initialArray.length;i++){
    finalArray.push(parseInt(initialArray[i]))
    }
    //console.log(newArray);
    //Inverir los dígitos del array a
    let reverseArray = finalArray.reverse();
    //console.log(reverseArray);
    //Encontrar los dígitos de posición "par"
    for (let i= 0; i < reverseArray.length-1; i++){
        if ((i+1) %2 !== 0){
    //Multiplicar por 2 los dígitos de posición "par"
        reverseArray[i+1]= reverseArray[i+1]*2;
    //Si el producto es mayor que 10, sumar las cifras
        if(reverseArray[i+1]>=10){
        reverseArray[i+1]=reverseArray[i+1]-9;
    }}}
    //console.log(reverseArray);
    let sumDigits = 0;
    for (let i=0; i<reverseArray.length; i++){
        sumDigits = sumDigits + reverseArray[i];
    }
    if (sumDigits % 10 == 0){
        //console.log('Número de Tarjeta Válida')
        return true ;
    }
    else {
        //console.log('Número de tarjeta inválida');
        return false ;
        }
    //return creditCardNumber;
    },

    maskify: function(creditCardNumber) {
    let cardHide = Array.from(creditCardNumber);
    let hideNum = [];
	for(let i = 0; i < cardHide.length; i++){
    if(i < cardHide.length-4){
      hideNum.push('#');
    }else{
      hideNum.push(cardHide[i]);
    }
  }
  return hideNum.join("");
}

}

export default validator;
