/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i < 5; i++) { // < al posto di >
    // console.log(i);
}

// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 == 0) {      //if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}

//console.log(addIfEven(7)); // Output: 7
//console.log(addIfEven(10)); // Output: 15


// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i < 5; i++) {     //; al posto di ,
        console.log(i);
    }
}
// console.log(loopToFive());


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length   ; i++) {  //tolto; dopo i++  e tolto -1 dopo member.lenght
        if (numbers[i] % 2 === 0); {   //=== AL POSTO DI =  aggiunto numers[i]
            evenNumbers.push(numbers[i]); //push in evenNumbers[i]
        }
        
    } 
       return evenNumbers;
}

const result = displayEvenNumbers();
console.log(result); 

// displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

