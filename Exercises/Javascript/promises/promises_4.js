let randomNumber = (Math.random() *1);

function fetchDataFromAPI(arg) {
    return new Promise((resolve, reject) => {
        if(randomNumber < 0.5) {
            resolve(`Data retrieved successfully`);
        } else {
            reject(new Error(`Error: Failed to fetch data`));
        }
    })
};

// ESEMPIO NUOVA SINTASSI ASYNC AWAIT

async function exampleAsyncAwait() {
    try {
        const result = await fetchDataFromAPI(randomNumber);
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
};

exampleAsyncAwait();


// ESEMPIO VECCHIA SINTASSI THEN E CATCH

fetchDataFromAPI(randomNumber).then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error.message);
});
