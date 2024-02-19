let tempoRimanente = 10;

console.log(`Conto alla rovescia in corso...`);

function contoAllaRovescia() {
    if (tempoRimanente === 0) {
        clearInterval(id);
        console.log(`Conto alla rovescia terminato!`);
    } else {
        console.log(tempoRimanente);
        tempoRimanente--;
    }
}

const id = setInterval(contoAllaRovescia, 1000);
