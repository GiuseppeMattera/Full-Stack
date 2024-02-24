function luckyDraw(player) {
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

const runLuckyDraw = async (player) => {
    try {
        const result = await luckyDraw(player);
        console.log(result);
    } catch (error) {
        console.error(error.message);
    }
}

async function runAllLuckyDraws() {
    await runLuckyDraw('Joe');
    await runLuckyDraw('Caroline');
    await runLuckyDraw('Sabrina');
}

runAllLuckyDraws();