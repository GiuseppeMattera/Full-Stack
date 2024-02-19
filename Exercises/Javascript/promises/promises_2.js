const user = {
    id: 1,
    name: "john"
};

const post = ["Post 1", "Post 2", "Post 3"];

function fetchUserData(arg) {
    return new Promise ((resolve, reject) => {
        if(typeof arg === "object" && !Array.isArray(arg)) {
            resolve(arg);
        } else {
            reject(new Error(`Parameter must be an object!`));
        }
    })
};

function fetchUserPosts(arg) {
    return new Promise ((resolve, reject) => {
        if(Array.isArray(arg)) {
            resolve(arg);
        } else {
            reject(new Error(`Parameter must be an array!`));
        }
    })
};

// ESEMPIO NUOVA SINTASSI ASYNC AWAIT

async function exampleAsyncAwait() {
    try {
        const result = await fetchUserData(user);
        console.log(result.name);
    } catch (error) {
        console.log(error.message);
    }
};

exampleAsyncAwait();

async function exampleAsyncAwait2() {
    try {
        const result = await fetchUserPosts(post);
        result.forEach((element) => console.log(element));
    } catch (error) {
        console.log(error.message);
    }
};

exampleAsyncAwait2();


// ESEMPIO CON LA VECCHIA SINTASSI THEN E CATCH

fetchUserData(user).then((value) => {
    console.log(value.name);
}).catch((error) => {
    console.log(error.message);
});

fetchUserPosts(post).then((value) => {
    value.forEach(element => {
        console.log(element);
    });
}).catch((error) => {
    console.log(error.message);
});
