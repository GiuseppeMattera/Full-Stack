function performOperation(a, b, callback) {
    const sum = a + b;
    callback(sum);
}

function displayResult(result) {
    console.log(result);
}

performOperation(5, 3, displayResult);
