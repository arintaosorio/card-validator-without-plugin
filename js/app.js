const form = document.querySelector("form");

form.addEventListener("submit", e => {
  e.preventDefault();
  if (validateCardDetails(form)) {
    console.log("datos válido... enviar...");
  } else {
    console.log("datos inválidos");
  }
});


const onlyNumbers = e => {
  const key = window.event ? e.which : e.keyCode;
  if (key < 48 || key > 57) {
    e.preventDefault();
  }
}


const numberCardValidation = (number) => {

  let cardNumber = number.value.split(""); //convertimos en array
  let inverse = cardNumber.reverse();//87541... números al revés
  let odd = 0;
  let even = 0;
  let evenPlus = 0;


    for(let i = 0; i < 16; i++){ //aquí sacamos la suma de numeros impares
      if(i % 2 !== 1){
        odd = odd + parseInt(inverse[i]);
      }
    }

        for(let j = 1; j < 16; j++){
          //sacamos el números pares menores a 4 y multiplicamos por 2
          if (j % 2 === 1 && parseInt(inverse[j]) <= 4){
            even = even + (parseInt(inverse[j])*2);
            // de aquí en adelante reasiganamos los valores mayores del
          } else if (j % 2 === 1 && inverse[j] == 5){
             evenPlus = evenPlus + parseInt(1);
          } else if (j % 2 === 1 && inverse[j] == 6){
             evenPlus = evenPlus + parseInt(3);
          } else if (j % 2 === 1 && inverse[j] == 7){
             evenPlus = evenPlus + parseInt(5);
          } else if (j % 2 === 1 && inverse[j] == 8){
             evenPlus = evenPlus + parseInt(7);
          } else if (j % 2 === 1 && inverse[j] == 9){
             evenPlus = evenPlus + parseInt(9);
          }
        }

      //hacemos la de nuestros numeros pares, pares mayores e impares y comprobamos si son módulo de 10
      let ckeckCard = even + odd + evenPlus;
      if(ckeckCard % 10 === 0){
        number.classList.add("sucess");
      } else {
         console.log("Your card is an invalid card");
      }
}

    



const cvvValidation = number => {
  if(number.value == 1){
    number.classList.add("sucess");
    console.log("hola");
   
  }
}



const validateCardDetails = element => {
  const arrayForm =  Array.from(element);

  const numberCard = arrayForm[0];
  const dueDateCard = arrayForm[1];
  const cvvCard = arrayForm[2];
  const nameCard = arrayForm[3];

  cvvValidation(cvvCard);
  numberCardValidation(numberCard);

  numberCard.addEventListener("keypress", onlyNumbers, false);
  cvvCard.addEventListener("keypress", onlyNumbers, false);
}
validateCardDetails(form)

