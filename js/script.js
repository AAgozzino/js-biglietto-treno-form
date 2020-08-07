// Evento GENERA
var genera = document.getElementById("genera");

genera.addEventListener("click",
function() {
  var nome = document.getElementById("nome").value;
  console.log(nome);
  var km = document.getElementById("km").value;
  console.log(km);
  var eta = document.getElementById("fascia-eta").value;
  console.log(eta);

  // Calcolo prezzo biglietto base
  var ticket = km * 0.21;
  console.log(ticket);

  /*  Se eta == minorenne sconto 20%
      Se eta == over65 sconto 40%
  */
  if (!isNaN(nome) || km < 0) {
    alert("Errore: inserisci Nome o Km>0")
  }
  else if (eta == "minorenne") {
    var ticketPrice = ticket - (ticket / 5);
    document.getElementById("offerta").innerHTML = "Offerta Junior";
  } else if (eta == "over65") {
    var ticketPrice = ticket - ((ticket / 5) * 2);
    document.getElementById("offerta").innerHTML = "Offerta Silver";
  } else {
    var ticketPrice = ticket;
    document.getElementById("offerta").innerHTML = "Biglietto Standard";
  }
  console.log(ticketPrice);

  // Generare il numero della carrozza e il codice CP
  var carrozza = Math.floor(Math.random() * 9) + 1;
  var codice = Math.floor(Math.random() * 9999) + 90000;
  console.log(carrozza);
  console.log(codice);

  // Stampare il Biglietto
  document.getElementById("biglietto").classList.add("show");
  document.getElementById("nome-passeggero").innerHTML = nome;
  document.getElementById("carrozza").innerHTML = carrozza;
  document.getElementById("codice").innerHTML = codice;
  document.getElementById("costo").innerHTML = ticketPrice.toFixed(2) + "€";

}
);

// Evento ANNULLA
var annulla = document.getElementById("annulla");

annulla.addEventListener("click",
function() {
  document.getElementById("nome").value = "";
  document.getElementById("km").value = "";
  document.getElementById("fascia-eta").value = "";
  document.getElementById("biglietto").classList.remove("show");
}
)
