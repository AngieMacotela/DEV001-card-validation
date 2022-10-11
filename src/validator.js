const validator = { 
  isValid(cardNumber){
  let cardSplit = cardNumber.split('')
  let cardReverse = cardSplit.reverse()
  let nuevoarray = cardReverse
  let suma = 0;
  let number= 0;
  for (let i = 0; i < nuevoarray.length; i++) {
    number = parseInt(nuevoarray[i]);
    if (i % 2 == 1) {  
      number = number*2;
       if (number >= 10) {
        number= parseInt(number) - 9;
        console.log(number)
      } 
    } 
    suma+= number;
    console.log(suma ,'suma')
  }
  if((suma)%10 == 0){
      return true
    }else {
      return false
  }
 },
 maskify(numero){
	if (numero.length < 4) return numero;
	const last4Characters = numero.substr(-4);
	const maskingCharacters = numero.substr(0, numero.length - 4).replace(/./g, '#');
	return `${maskingCharacters}${last4Characters}`;
 }
}
    // ... 

    export default validator;



  /*
  var valor1 = 0;
  var valor2 = 0;
  var valor3= 0;
  var multiplicacion=0;
  
  for (let i = 0; i < nuevoarray.length; i++) {
    if (i % 2 === 0) {
      multiplicacion= nuevoarray[i]*2
       if (multiplicacion >= 10) {
      valor1 = parseInt(multiplicacion) - 9;
        console.log(valor1);
      } else {valor2= parseInt(multiplicacion)
      console.log(valor2)}
    } else {}
    if (i%2===1){
      valor3= parseInt(nuevoarray[i])
      console.log(valor3);
      }else {}  
    }
    if((valor1 + valor2 + valor3)%10==0){
    alert("tarjeta invalida")
    }else {alert("tarjeta valida")}
};
for (i=0;i<nuevoarray.length;i++){
  if (i%2==0){
      let parmultiplicado = nuevoarray[i]*2
      if (parmultiplicado>9){
          let separar = parmultiplicado.toString().split("")
          let primernumero = separar[0]
          let segundonumero = separar[1]
          let suma= parseInt(primernumero)+parseInt(segundonumero)
          let string = suma.toString()
          console.log(string)}
      else{console.log(parmultiplicado.toString())}
      }
  if (i%2==1){
      let impar = nuevoarray[i]
      console.log(impar)}
  }
*/