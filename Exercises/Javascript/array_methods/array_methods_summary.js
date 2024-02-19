const studenti = [
    { nome: "Alice", voto: 95 },
    { nome: "Bob", voto: 88 },
    { nome: "Carol", voto: 76 },
    { nome: "David", voto: 92 },
    { nome: "Eve", voto: 84 },
];

// UTILIZZO IL METODO FOREACH PER STAMPARE TUTTE LE KEYS "NOME" DEGLI OGGETTI CHE COMPONGONO L'ARRAY
studenti.forEach(element => console.log(element.nome));

// UTILIZZO IL METODO FIND PER TROVARE IL PRIMO OGGETTO STUDENTE CHE HA LA KEYS "VOTO" > 90
console.log(studenti.find(element => element.voto > 90));

// UTILIZZO IL METODO REDUCE PER CALCOLARE LA SOMMA DEI VOTI DEGLI STUDENTI E LA DIVIDO PER
// IL NUMERO DI STUDENTI COSI' DA TROVARNE LA MEDIA
// UTILIZZO ANCHE IL METODO MATHROUND PER APPROSSIMARE LA MEDIA AD UN NUMERO INTERO NEL CASO
// IL RISULTATO NON FOSSE TALE
let sumVoto = studenti.reduce((a, element) => a + element.voto, 0);
let averageVoto = sumVoto / studenti.length;
console.log(Math.round(averageVoto));

// UTILIZZO IL METODO MAP PER TRASFORMARE OGNI NOME DI OGNI STUDENTE
// UTILIZZO IL METODO TOUPPERCASE PER TRASFORMARLI AUTOMATICAMENTE IN MAIUSCOLO
console.log(studenti.map(element => element.nome.toUpperCase()));

// UTILIZZO IL METODO FILTER PER TORNARE UN NUOVO ARRAY FILTRANDO QUELLO DI PARTENZA A SECONDA DEL VOTO 
console.log(studenti.filter(element => element.voto > 85));
