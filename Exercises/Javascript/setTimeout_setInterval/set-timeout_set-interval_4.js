function lanciaDadi() {
    console.log(`Lancio dei dadi in corso...`);

    setTimeout( () => {
        let dado1 = Math.floor(Math.random() * 7);
        let dado2 = Math.floor(Math.random() * 7);
        console.log(`Lancio dei dadi: Dado 1 = ${dado1}, Dado 2 = ${dado2}`);
    }, 2000);
}

lanciaDadi();

// function lanciaDadi() {
//     let dado1 = Math.floor(Math.random() * 7);
//     let dado2 = Math.floor(Math.random() * 7);
//     console.log(`Lancio dei dadi: Dado 1 = ${dado1}, Dado 2 = ${dado2}`);
// }

// console.log(`Lancio dei dadi in corso...`);

// setTimeout(lanciaDadi, 2000);

// PAIR PROGRAMMING CON JACOPO SANGREGORIO
