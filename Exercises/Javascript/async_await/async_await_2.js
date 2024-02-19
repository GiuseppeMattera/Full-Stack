const moduleA = "A";
const moduleB = "B";
const moduleC = "C";

function caricaModulo(modulo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(modulo){
                resolve(`Il modulo ${modulo} è stato caricato.`);
            } else {
                reject(new Error(`Warning!!! Error while charging module!`));
            }
        }, 2000);
    });
};

async function lanciaVeicoloSpaziale() {
    try {
        console.log(`E' in corso il caricamento dei moduli...`);
        console.log(await caricaModulo(moduleA));
        console.log(await caricaModulo(moduleB));
        console.log(await caricaModulo(moduleC));
        console.log(`Veicolo spaziale pronto per il lancio!`);
    } catch (error) {
        console.log(error.message);
    }
};

lanciaVeicoloSpaziale();
