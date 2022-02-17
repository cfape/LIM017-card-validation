//Objeto validator contiene 2 funciones
const validator = {
    isValid: function(creditCardNumber) {
        let array1 = creditCardNumber.split("");
        //console.log(array1);
        let reverseArray = array1.reverse();
        //console.log(reverseArray);
        let array2 = [];
        for (let i = 0; i < reverseArray.length; i++) {
            console.log(i+1);
            if ((i+1) %2 === 0){              //posición par
                let parMulti = reverseArray[i+1]*2;
                if (parMulti >= 10) {
                let numNew = parMulti - 9;
                array2.push(numNew);
                } else {
                array2.push(parMulti);
                }
            } else {                           //posición impar
                let imparNum = reverseArray[i]
                array2.push(imparNum);
            }
        }
        //console.log(array2);
        return creditCardNumber;
    },
    maskify: function(creditCardNumber) {
    return creditCardNumber;
}
}
//}
export default validator;
