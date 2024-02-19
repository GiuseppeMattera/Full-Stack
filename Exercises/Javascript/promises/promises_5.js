function callback_BasedFunction(arg1, arg2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = arg1 + arg2;
            if(result % 2 !== 0) {
                resolve(result);
            } else {
                reject(new Error(`Result is not odd!`));
            };
        }, 1000);
    });
};

// ESEMPIO CON NUOVA SINTASSI ASYNC AWAIT

async function exampleAsyncAwait() {
    try {
        const result = await callback_BasedFunction(12, 23);
        console.log(result); 
    } catch (error) {
        console.log(error.message);
    }
};

exampleAsyncAwait();


// ESEMPIO DI FUNZIONAMENTO CON VECCHIA SINTASSI THEN E CATCH

callback_BasedFunction(54, 12).then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error.message);
});
