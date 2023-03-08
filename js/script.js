// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


// {MY SCRIPT}

// creo due variabili che conterranno i dati in input del utente. (Valore di ritorno di un prompt)
let mileage = prompt("Inserisci la quantità di km che vuoi percorrere");
let age = prompt("Inserisci la tua età");

console.log(mileage + age);

// creo una constante contenente il prezzo fisso per km
const priceForKm = 0.21;

console.log(priceForKm);
// calcolo il costo totale sulla base di km da percorrere e prezzo per km
let totalPrice = mileage * priceForKm;

console.log(totalPrice);

// creo due constanti contenenti i possibili sconti che verranno applicati sul prezzo del biglietto
const discount20 = 0.20;
const discount40 = 0.40;

//creo due variabili che calcoleranno lo sconto da applicare sul prezzo finale
let discountApplied20 = totalPrice * discount20;
let discountApplied40 = totalPrice * discount40;

// creo più condizioni che mi permettano di verificare -se e quale- sconto applicare al utente, sulla base delle informazioni che utente mi ha fornito
if (age < 18) {
    totalPrice -= discountApplied20;
    console.log(discountApplied20);
}
if (age > 64) {
    totalPrice -= discountApplied40;
    console.log(discountApplied40);
}
else{
    totalPrice = totalPrice;
}

console.log(totalPrice);

