document.addEventListener("DOMContentLoaded", function () {
  function handleClick() {
    console.log("Hai cliccato il pulsante!");
  }

  var Pallino = document.getElementById("Pallino");

  Pallino.addEventListener("click", handleClick);
});
