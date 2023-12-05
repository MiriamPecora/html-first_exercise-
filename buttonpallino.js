// primo esercizio:
// document.addEventListener("DOMContentLoaded", function () {
//   function handleClick() {
//     console.log("Sono un pallino nero!");
//   }

//   var Pallino = document.getElementById("Pallino");

//   Pallino.addEventListener("click", handleClick);
// });

// document.getElementById("Pallino").addEventListener("click", function () {
//   console.log("Sono un pallino nero!");
// });

// secondo esercizio:
// contatoreElement = document.getElementById("contatore");
// incrementaButton = document.getElementById("incrementa");
// decrementaButton = document.getElementById("decrementa");

// incrementaButton.addEventListener("click", function () {
//   // Incrementare il valore del contatore
//   contatoreElement.textContent = +contatoreElement.textContent + 1;
// });

// decrementaButton.addEventListener("click", function () {
//   // Verifico che il valore sia maggiore di 0 prima di decrementare
//   if (+contatoreElement.textContent > 0) {
//     // Decrementare il valore del contatore
//     contatoreElement.textContent = +contatoreElement.textContent - 1;
//   } else {
//     // Se il valore è già 0, mostra un alert
//     alert("Il valore non può essere inferiore a 0!");
//   }
// });

// terzo esercizio:

// let numberinput = 0;
// let risultato = 0;

// function somma() {
//   numberinput = Number(document.getElementById("numberinput").value);
//   risultato = Number(document.getElementById("risultato").textContent);

//   risultato = risultato + numberinput;

//   if (risultato < 0) {
//     document.getElementById("risultato").className = "red";
//   } else {
//     document.getElementById("risultato").className = "";
//   }

//   aggiornaRisultato(risultato);
//   aggiornaInput();
// }
// function sottrai() {
//   numberinput = Number(document.getElementById("numberinput").value);
//   risultato = Number(document.getElementById("risultato").textContent);

//   risultato = risultato - numberinput;

//   if (risultato < 0) {
//     document.getElementById("risultato").className = "red";
//   } else {
//     document.getElementById("risultato").className = "";
//   }

//   aggiornaRisultato(risultato);
//   aggiornaInput();

// }

// function aggiornaRisultato(risultatoAggiornato) {
//   document.getElementById("risultato").textContent = risultatoAggiornato;
// }
// function aggiornaInput() {
//   document.getElementById("numberinput").value = 0;
// }

// document.getElementById("somma").addEventListener("click", somma);
// document.getElementById("sottrai").addEventListener("click", sottrai);

let numberinput = 0;
let risultato = 0;

function sommaOSottrazione(isSomma) {
  numberinput = Number(document.getElementById("numberinput").value);
  risultato = Number(document.getElementById("risultato").textContent);

  if (isSomma) {
    risultato = risultato + numberinput;
  } else {
    risultato = risultato - numberinput;
  }
  
  document.getElementById("risultato").textContent = risultato;
  document.getElementById("numberinput").value = 0;

  modificaClasseRisultato(risultato);
}

function modificaClasseRisultato(valoreRisultato) {
  if (valoreRisultato < 0) {
    document.getElementById("risultato").classList.add("red");
  } else {
    document.getElementById("risultato").classList.remove("red");
  }
}

document.getElementById("somma").addEventListener("click", function () {
   sommaOSottrazione(true);
  });
document.getElementById("sottrai").addEventListener("click", function () {
    sommaOSottrazione(false);
  });
