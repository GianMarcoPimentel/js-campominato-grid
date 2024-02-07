/* 
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Potete realizzare lo stile che volete, sin quando tutto è leggibile con facilità :muscolo::carnagione-2:
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/

// pendiasmo la nostra griglia
// creiamo un ciclo for
    // per ogni iterazione creiamo una cella nella griglia

const gridElement = document.querySelector("#grid");
console.log(gridElement);

//griglia 10x10
for (let i = 0; i < 100 ; i++){
    // per ognunodi questi creare un elemento 
    const newElement = document.createElement("div");
    console.log(newElement);
    // ci aggiungo la classe
    newElement.classList.add("square");
    //all'interno di se stesso ci aggiungo il nostro newElement
    gridElement.append(newElement);
}