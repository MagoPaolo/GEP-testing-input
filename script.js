// Funzione verifica
function verifica() {
    // Valori in input
    const numero = document.getElementById('numero').value
    const nome = document.getElementById('nome_titolare').value
    const mese_scadenza = document.getElementById('mese_scadenza').value
    const anno_scadenza = document.getElementById('anno_scadenza').value
    const cvv = document.getElementById('cvv').value

    // Regex di controllo
    const regex_numero = /\d/
    const regex_numero_visa = /^4[0-9]{12}(?:[0-9]{3})?$/
    const regex_numero_mastercard = /^5[1-5][0-9]{14}$/
    const regex_numero_american = /^3[47][0-9]{13}$/

    const regex_nome_titolare = /^[A-Za-z]+ [A-Za-z]+$/

    const regex_mese = /^(0[1-9]|1[0-2])$/
    const regex_anno = /^(20[0-9][0-9])$/

    const regex_cvv = /^[0-9]{3,4}$/
    
    // Controlli numero carta
    if (regex_numero.test(numero)) {
        if (regex_numero_visa.test(numero)) {
            document.getElementById("compagnia").innerHTML = 'Visa'
        } else if (regex_numero_mastercard.test(numero)) {
            document.getElementById("compagnia").innerHTML = 'Mastercard'
        } else if (regex_numero_american.test(numero)) {
            document.getElementById("compagnia").innerHTML = 'American'
        } else {
            alert("La carta non appertiene ai circuiti supportati:\n- Visa\n- Mastercard\n- American Express\n\nRiprova ad inserire il numero")
            document.getElementById('numero').value = ''
            document.getElementById("compagnia").innerHTML = '-'
            return false
        }
    } else {
        alert("Il numero della carta può contenere solo numeri\n\nRiprova")
        document.getElementById('numero').value = ''
        document.getElementById("compagnia").innerHTML = '-'
        return false
    }

    // Controlli nome titolare
    if (regex_numero.test(nome)) {
        alert("Il nome inserito contiene un numero\n\nRiprova")
        document.getElementById('nome_titolare').value = ''
        return false
    } else if (!regex_nome_titolare.test(nome)) {
        alert("Il nome inserito non è valido\n\nRiprova")
        document.getElementById('nome_titolare').value = ''
        return false
    }

    // Controlli mese
    if (regex_numero.test(mese_scadenza)) {
        if (!regex_mese.test(mese_scadenza)) {
            alert("Mese non valido\nFormato richiesto: (MM)\n Range: (01 - 12)\n\nRiprova")
            document.getElementById('mese_scadenza').value = ''
            return false
        }
    } else {
        alert("Non è stato inserito il mese in formato numerico\n\nRiprova")
        document.getElementById('mese_scadenza').value = ''
        return false
    }

    // Controlli anno
    if (regex_numero.test(anno_scadenza)) {
        if (!regex_anno.test(anno_scadenza)) {
            alert("Anno non valido\nFormato richiesto: (YYYY)\nRange: 2000 - 2099\n\nRiprova")
            document.getElementById('anno_scadenza').value = ''
            return false
        }
    } else {
        alert("Non è stato inserito l'anno in formato numerico\n\nRiprova")
        document.getElementById('anno_scadenza').value = ''
        return false
    }

    // Controlli scadenza
    if( anno_scadenza < 2023 || anno_scadenza <= 2023 && mese_scadenza < 11) {
        alert("Carta scaduta\n\nRiprova")
        document.getElementById('mese_scadenza').value = ''
        document.getElementById('anno_scadenza').value = ''
        return false
    }

    // Controlli cvv
    if (!regex_cvv.test(cvv)) {
        alert("Il CVV inserito non è valido\n\nRiprova")
        document.getElementById('cvv').value = ''
        return false
    } 

    alert("Carta registrata con successo")

}