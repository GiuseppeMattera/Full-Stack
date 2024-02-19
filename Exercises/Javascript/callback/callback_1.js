function doubleArray(arr, callback) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray.push(callback(arr[i]));
    }
    return newArray;
}

function doubleValue(num) {
    return num * 2;
}

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = doubleArray(numbers, doubleValue);
console.log(doubledNumbers);
