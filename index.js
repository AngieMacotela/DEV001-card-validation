import validator from './validator.js';
console.log(validator)

const enmascarar= document.getElementById("numero");
let cardNumber;
const validar= document.getElementById("realizarpago");
validar.addEventListener( "click", function(){
    cardNumber = enmascarar.value
    enmascarar.value=validator.maskify(enmascarar.value)
    console.log(cardNumber)
    validator.isValid(cardNumber)
    if (validator.isValid(cardNumber)) {
        return alert("tarjeta valida");
        } else {
        return alert("tarjeta invalida")
        }
})
