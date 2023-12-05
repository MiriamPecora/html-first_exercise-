document.addEventListener("DOMContentLoaded", function () {
  function handleClick() {
    console.log("Sono un pallino nero!");
  }

  var Pallino = document.getElementById("Pallino");

  Pallino.addEventListener("click", handleClick);
});
