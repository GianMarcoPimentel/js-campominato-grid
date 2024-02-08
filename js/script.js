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
    // per ogni iterazione creiamo una cella nella grigli
const buttonElement = document.querySelector("#start");
/* console.log(buttonElement); */
buttonElement.addEventListener("click", function() {
    //salvo la griglia in una variabile
    const gridElement = document.querySelector("#grid");
    /* console.log(gridElement);*/

    //codice per generare la griglia
    let squareNumber;
    //test per la select : stampiamone il valore
    const selectElement = document.querySelector("#difficolta");
    console.log(selectElement.value);
    if(selectElement.value == "easy"){
        squareNumber = 100;
      // gridElement.className = "easy";
    } else if (selectElement.value == "medium"){
        squareNumber = 81;
      // gridElement.className = "medium";
    } else{
        squareNumber = 49;
     // gridElement.className = "hard";
    }
    // per ottimizzare meglio
    gridElement.className = selectElement.value;
   
    // resetto la griglia in modo che al nuovpo click del pulsante non aggiunga altre griglie
    gridElement.innerHTML="";
    // faccio comparire la griglia
    gridElement.style.display = "flex";
    /* const RandomNumbersArray = getRandomNumbersArray();
    console.log(RandomNumbersArray); */
    //griglia 10x10
    for (let i = 0; i < squareNumber ; i++){ // metto 'squareNumber' e non un numero in modo che possa cambiarlo in base alla difficoltà
        // per ognunodi questi creare un elemento 
        const newElement = document.createElement("div");
        /* console.log(newElement); */
        // ci aggiungo la classe
        newElement.classList.add("square");
        /* newElement.innerText = RandomNumbersArray[i] ; */ // per scrivere all'interno degli square i numeri da 1 a 100 CASUALI
        newElement.innerText = i + 1 ; // per scrivere all'interno degli square i numeri da 1 a 100 ORDINATI
 
        //all'interno di se stesso ci aggiungo il nostro newElement
        gridElement.append(newElement);

        newElement.addEventListener("click", function(){
            /* console.log("click"); */
            /* console.log(this); */ //per vedere dove agisce il this
            //per mezzo di 'this' aggiungo una classe
            this.classList.toggle("active");
           // newElement.classList.add("even");
            //newElement.classList.add("odd");
            //voglio avere in console il numero
            console.log(this.innerText);
    })
    }
})

/* 

    //TEST-TEST-TEST-TEST-TEST-TEST-TEST-TEST-TEST-TEST-TEST-TEST
    //faccio la funzione per creare i numeri casuali all'interno degli square

    function getRandomNumber(maxNumber){

        const randomNumber = Math.floor(Math.random() * maxNumber) + 1;

        return randomNumber;

    }
    getRandomNumbersArray();
    function getRandomNumbersArray(){

        const numbersArray = [];

        while(numbersArray.length < 100){
        //numbersArray.push(getRandomNumber(100));     
            // console.log(numbersArray); 
            // insrisci il numero solo se non è già presente
            const newNumber = getRandomNumber(100) ;
            //controllo se il numero è già presente ne nostro array
            if( ! numbersArray.includes(newNumber)){
                numbersArray.push(newNumber);
            }
        
        }
        // per farlo apparire in pagina devo fare il return del mio array
        return numbersArray;
    }

*/
