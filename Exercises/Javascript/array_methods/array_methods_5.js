const persons = [
    { name: 'Paul', age: 16 },
    { name: 'George', age: 17 },
    { name: 'Lucas', age: 21 },
    { name: 'Marco', age: 32 },
    { name: 'Peter', age: 18 },
    { name: 'Carl', age: 13 },
    { name: 'Simon', age: 24 },
    { name: 'Mark', age: 15 },
    { name: 'Sandra', age: 34 },
    { name: 'Alice', age: 28 }
];

// ESEMPIO 1 CON LA FUNZIONA SCRITTA ESTERNAMENTE
function calculateAverageAge (arg) {
    let sumAge = arg.reduce((a, element) => a + element.age, 0);
    let averageAge = sumAge / arg.length;
    return averageAge;
}

const average = calculateAverageAge(persons);
console.log(persons);
console.log(Math.round(average));

// ESEMPIO 2 FUNZIONE ANONIMA
let sumAge_2 = persons.reduce((a, element) => a + element.age, 0);
let averageAge_2 = sumAge_2 / persons.length;
console.log(Math.round(averageAge_2));
