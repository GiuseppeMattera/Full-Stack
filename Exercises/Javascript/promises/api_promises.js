const persons = [
    {
      id: 1,
      firstName: 'Mario',
      lastName: 'Rossi',
      age: 25
    },
    {
      id: 2,
      firstName: 'Maria',
      lastName: 'Verdi',
      age: 32
    },
    {
      id: 3,
      firstName: 'Giovanni',
      lastName: 'Rossi',
      age: 35
    }
];

const jobs = [
    {
      id: 1,
      jobTitle: 'CEO'
    },
    {
      id: 2,
      jobTitle: 'Project Manager'
    },
    {
      id: 3,
      jobTitle: 'Developer'
    }
];

function fetchPersonById(id){
    return promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            const person = persons.find(person => person.id == id);
            if (person){
                return resolve(person)
            } else {
                return reject(new Error(`No person with id ${id}`))
            }
        }, 3000)
    })
};
  
function fetchJobById(id){
    return promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            const job = jobs.find(job => job.id == id);
            if (job){
                return resolve(job)
            } else {
                return reject(new Error(`No job with id ${id}`))
            }
        }, 2000)
    })
};

// ESEMPIO CON LA NUOVA SINTASSI ASYNC AWAIT

async function exampleTryCatch() {
    try {
        const person = await fetchPersonById(2);
        console.log(person);
        const job = await fetchJobById(3);
        console.log(job);
    } catch (error) {
        console.log(error.message);
    }
}

exampleTryCatch();


// ESEMPIO CON LA VECCHIA SINTASSI THEN E CATCH

fetchPersonById(2).then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error.message);
});

fetchJobById(3).then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error.message);
});


// ESEMPIO CON PROMISE.ALL

Promise.all([fetchPersonById(3), fetchJobById(3)]).then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error.message);
});
