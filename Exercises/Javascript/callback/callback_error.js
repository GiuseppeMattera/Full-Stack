function performOperation(a, b, callback) {
    if (typeof a === "number" && typeof b === "number") {
        const sum = a + b;
        callback(null, sum);
    } else {
        callback(new Error(`Entered parameter are not a numbers!`), null);
    }
    
}

function displayResult(error, result) {
    if (error) {
        console.log(`${error}`);
    } else {
        console.log(result);
    }
}

performOperation(5, 3, displayResult);
