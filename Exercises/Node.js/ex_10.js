const luckyDraw = (player) => {
    return new Promise((resolve, reject) => {
        const win = Boolean(Math.round(Math.random()));

        process.nextTick(() => {
            if (win) {
                resolve(`${player} won a prize in the draw!`);
            } else {
                reject(new Error(`${player} lost the draw.`));
            }
        });
    });
}

const results = async () => {
    try {
        const resultTina = await luckyDraw('Tina');
        console.log(resultTina);
    } catch (error) {
        console.error(error.message);
    }

    try {
        const resultJorge = await luckyDraw('Jorge');
        console.log(resultJorge);
    } catch (error) {
        console.error(error.message);
    }

    try {
        const resultJulien = await luckyDraw('Julien');
        console.log(resultJulien);
    } catch (error) {
        console.error(error.message);
    }
}

results();