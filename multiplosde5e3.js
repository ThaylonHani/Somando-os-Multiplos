somar(9)

function somar(limites) {
    let multiplosde3 = 0;
    let multiplosde5 = 0;
    for (numero = 0; numero <= limites; numero++) {
        if (numero % 3 === 0) {
            multiplosde3 += numero;
            if (numero % 3 === 0)
                multiplosde5 += numero;
        }
    }
    console.log(multiplosde3 + multiplosde5)
}