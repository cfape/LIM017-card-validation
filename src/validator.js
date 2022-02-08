const validator = {
  isValid: function (creditCardNumber){
    let arrayNum = Array.from(creditCardNumber);
    let arrayNum2 = [];
    let sumNum = 0;
    for (let i = 0; i < arrayNum.length; i++){
      arrayNum2.push(parseInt(arrayNum[i],));
    }
    arrayNum2.reverse();
    for (let i = 0; i < arrayNum2.length; i++){
      if ((i+1)%2==0){
        arrayNum2 [i]*=2;
        if(arrayNum2[i]>=10){
          arrayNum2 [i]-=9;
        }
    }
    }
    //Retorna si es valida
    return sumNum %10 === 0;
    }
    }






export default validator;
