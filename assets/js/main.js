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

if (emailUtente === listaEmail[1]){
    alert('Accesso consentito')
} else if (emailUtente === listaEmail[2]){
    alert('Accesso consentito')
} else {
    alert('Accesso negato')

}

//stampa un messaggio appropriato sull’esito del controllo.