// il pc genera 16 numeri casuali da 1 a 100
for (i = 1; i<=16; i++) {

  var numeroPc = fromUpTo(1, 100);

  console.log(numeroPc);
};

//Creazione di una funzione che generi un numero casuale compreso tra due valori

function fromUpTo(min, max) {

  return Math.floor(Math.random()*(max - min + 1)) + min;
};

var numeroUtente = prompt('Dammi un mumero da 1 a 100');
if(numeroUtente != numeroPc) {
  alert("You loose!")
} else if(numeroUtente === numeroPc) {
  alert("You win!!")
} else
alert("try again!");
