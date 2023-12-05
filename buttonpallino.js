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

contatoreElement = document.getElementById("contatore");
incrementaButton = document.getElementById("incrementa");
decrementaButton = document.getElementById("decrementa");

incrementaButton.addEventListener("click", function () {
  // Incrementare il valore del contatore
  contatoreElement.textContent = +contatoreElement.textContent + 1;
});

decrementaButton.addEventListener("click", function () {
  // Verifico che il valore sia maggiore di 0 prima di decrementare
  if (+contatoreElement.textContent > 0) {
    // Decrementare il valore del contatore
    contatoreElement.textContent = +contatoreElement.textContent - 1;
  } else {
    // Se il valore è già 0, mostra un alert
    alert("Il valore non può essere inferiore a 0!");
  }
});
