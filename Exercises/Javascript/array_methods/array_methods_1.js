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

// ESEMPIO 1 CON LA CALLBACK COSTRUITA ESTERNAMENTE
function adultFilter(person) {
    if (person.age >= 18) {
        return true;
    }
}

const adults = persons.filter(adultFilter);
console.log(adults);


// ESEMPIO 2 CON LA CALLBACK COSTRUITA DENTRO IL PARAMETRO DI .FILTER (FUNZIONE ANONIMA)
const adults_2 = persons.filter(person => person.age >= 18);
console.log(adults_2);

