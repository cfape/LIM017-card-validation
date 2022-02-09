//Objeto validator contiene 2 funciones
const validator = {
    isValid: function (creditCardNumber){
    //Números ingresados de la tarjeta
    let arrayNum1 = Array.from(creditCardNumber);
    //Nuevo array de números de tarjeta
    let arrayNum2 = [];
    let totalSum = 0;
    let finalArray = "";
    for (let i = 0; i < arrayNum1.length; i++) {
    arrayNum2.push(arrayNum1[i]);
    }
    arrayNum2.reverse();
    //Número de tarjeta ingresados de la tarjeta
    console.log(arrayNum1);
    //Número de tarjeta invertido
    console.log(arrayNum2);

    for(i = 0; i < arrayNum2.length; i++) {
    //encontrar los números en las posiciones pares
    if (i % 2 == 0) {
    arrayNum2[i]*= 2 ;
    if (arrayNum2[i]>10) ;
    arrayNum2[i]- = 9 ;
    }
    totalSum += arrayNum2[i] ;
  }
    },
    maskify: function (creditCardNumber) {
      let hideNum = [];
      for(let i = 0; i < creditCardNumber.length; i++) {
        if(i < creditCardNumber.length-4){
          hideNum.push("#");
        }else{
          hideNum.push(creditCardNumber[i]);
        }
      }
      return hideNum;
      }
}
export default 'validator' ;
