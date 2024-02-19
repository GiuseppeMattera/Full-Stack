const person = {
    name: "john",
    age: 30
}

function fetchDataFromAPI(callback) {
    setTimeout( () => {
        callback(person);
    }, 5000)
}
  
function handleData(data) {
    console.log(`My name is ${data.name} and my age is ${data.age}!`);
}
  
fetchDataFromAPI(handleData);
