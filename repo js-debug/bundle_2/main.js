/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    const message = '';

    if (myAge < 18) {
        message = alert(`Sei troppo giovane! Hai ${myAge} anni!`);
    } else {
        message = alert('Hai più di 18 anni!');
    }
}
checkAge();
// Questa funzione serve a verificare che l'utente sia maggiorenne o meno
// Manca l'alert per stampare a schermo il messaggio

// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
}
printColorsNumber();
// Questa funzione serve a stampare la lunghezza dell'array colors per vedere quanti colori vi sono presenti, non vi sono errori


// ESERCIZIO 3
function addNumbers() {
    const userNumber = prompt('Inserisci un numero');
    const total = +userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();
// Questa funzione aggiunge un valore fisso ad un numero dato in input dall'utente, tuttavia io trasformerei con un "+" il valore del prompt in numero a riga 40.


// ESERCIZIO 4
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    if (addresses.includes(userEmail)) {
        grantAccess === true;
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();
// La funzione serve a verificare che un utente abbia l'accesso fintanto che la sua mail e' presente nell'array, personalmente, credo che a riga 56 e 53 sia sbagliato inserire i valori booleani tra ' '. 


// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if (userEmail.length > 5) {

            if (email === userEmail) {
                grantAccess = 'true';

            }

        }

        if (grantAccess) {
            console.log('Accesso consentito!');
        } else {
            console.log('Accesso negato!');
        }
    }
}    
    checkAccessImproved();

// Analogamente a quella prima, la funzione controlla se l'utente puo' accedere tramite mail alla pagina, tuttavia questa volta il criterio di accesso viene specificato attraverso un for loop. 
// che mostra come ora la mail dell'utente debba avere piu' di 5 caratteri per essere valida



























