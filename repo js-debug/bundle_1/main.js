/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}
//Questo esercizio consiste in un ciclo for che conta fino a 4, creando 5 elementi, 0-1-2-3-4 per l'appunto, e non presenta alcun errore.

// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}
//Questa funzione serve per verificare che un numero sia pari, e nel caso in cui lo fosse, vi aggiunge 5, l'errore consisteva nell'aver messo solo 1 "=".


// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}
//Questa funzione genera un ciclo uguale a quello dell'es 1, con la differenza che in questo caso all'interno delle condizioni del ciclo vi era "," al posto di ";".

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] % 2 === 0); {
            evenNumbers.push(numbers[i]);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]
console.log(displayEvenNumbers());

// Errori: 
// - ";" dopo i++
// A riga 42, stesso errore di "=" con il modulo;
// Nello svolgimento dell'istruzione condizionale, veniva pushato solo l'indice [i], senza che fosse specificato che cosa
// A riga 41, non veniva specificato quale elemento di numbers dovesse operare con il modulo
//
//
//
