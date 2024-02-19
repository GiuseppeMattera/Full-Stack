function filterArray(arr, callback) {
    const newArray = [];
    for (let i=0; i<arr.length; i++) {
        if (callback(arr[i])) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}
   
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
   
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterArray(numbers, isEven);
console.log(evenNumbers);
