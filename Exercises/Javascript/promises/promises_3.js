const person = {
    name: "Joseph",
    age: "30",
    hobby: "building",
    favoriteFood: "Smashburger"
};

function exampleDelayPromise(arg) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof arg === "object" && !Array.isArray(arg) && arg.favoriteFood === "Smashburger") {
                resolve(`Hi ${person.name} welome back, this is your dinner, enjoy it!`);
            } else {
                reject(new Error(`Can't talk with you because you are not a person or you're not Joseph!`));
            }
        }, 2000);
    });
};

// ESEMPIO NUOVA SINTASSI ASYNC AWAIT

async function exampleAsyncAwait() {
    try {
        const result = await exampleDelayPromise(person);
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
};

exampleAsyncAwait();


// ESEMPIO VECCHIA SINTASSI THEN E CATCH

exampleDelayPromise(person).then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error.message);
});
