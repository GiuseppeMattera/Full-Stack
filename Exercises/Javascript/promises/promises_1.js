const person = {
    name: "john",
    age: 30,
};

function fetchDataFromAPI(arg) {
    return new Promise((resolve, reject) => {
        if(typeof arg === "object" && !Array.isArray(arg)) {
        resolve(`My name is ${arg.name} and my age is ${arg.age}!`);
        } else {
            reject(new Error(`Function works only with object!!!`));
        }
    })
};

// ESEMPIO NUOVA SINTASSI ASYNC AWAIT

async function exampleAsyncAwait() {
    try {
       const phrase = await fetchDataFromAPI(person);
       console.log(phrase); 
    } catch (error) {
        console.log(error.message);
    }
};

exampleAsyncAwait();


// ESEMPIO CON LA VECCHIA SINTASSI THEN E CATCH

fetchDataFromAPI(person).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error.message);
});
