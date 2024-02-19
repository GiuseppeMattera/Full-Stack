function somma (...numbers) {
    return numbers.reduce((a, number) => a + number, 0);
}

const someNumber = somma(653, 3, 11, 9, 1);
console.log(someNumber);
