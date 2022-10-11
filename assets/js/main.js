//Chiedi all’utente la sua email,
const emailUtente = prompt('Inserisci la tua email')
const listaEmail = ['riccardoscrizzi@gmail.com', 'donatoriccio@gmail.com']
//controlla che sia nella lista di chi può accedere,

/* for (let i = 0; i < listaEmail.length; i++) {
    const emailVerificate = listaEmail[i]
    if (emailUtente === emailVerificate){
        alert('Accesso consentito')
        
    } else{
        alert('accesso negato')
    }
} */

/* if (emailUtente === listaEmail[1]){
    alert('Accesso consentito')
} else if (emailUtente === listaEmail[2]){
    alert('Accesso consentito')
} else {
    alert('Accesso negato')

} */

let numeroEmail= 0

for(let i = 0; i < listaEmail.length; i++){
    if(listaEmail.includes(emailUtente) == false){
        numeroEmail++
    }
}
//stampa un messaggio appropriato sull’esito del controllo.
if(numeroEmail == listaEmail.length){
    alert(`Accesso negato`)
} else {
    alert(`Accesso consentito`)
    
    let giocatore = Math.round((Math.random()*5) + 1)
    let computer = Math.round((Math.random()*5) + 1)

    function calculations(){
     if(giocatore > computer){
        alert("Sei il vincitore")
        console.log('Numero giocatore -->', giocatore, ',', 'Numero computer -->', computer,',', 'Sei il vincitore');
     } else if (giocatore < computer){
        alert("Hai perso")
        console.log('Numero giocatore -->', giocatore, ',', 'Numero computer -->', computer,',', 'Hai perso');

     } else {
        alert("Pareggio")
       console.log('Pareggio');

     }
    }

    calculations();
}

