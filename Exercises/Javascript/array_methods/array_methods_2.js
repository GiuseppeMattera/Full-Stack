const notes = [
    {
      id: 1,
      description: 'Workout program',
      todos: [
        {
          id: 1,
          name: 'Push ups - 10 x 3',
          done: true
        },
        {
          id: 2,
          name: 'Abdominals - 20 x 3',
          done: true
        },
        {
          id: 3,
          name: 'Tapis Roulant - 15min',
          done: true
        }
      ]
    },
    {
      id: 2,
      description: 'Front-end Roadmap',
      todos: [
        {
          id: 1,
          name: 'Learn HTML',
          done: true
        },
        {
          id: 2,
          name: 'Learn CSS',
          done: false
        },
        {
          id: 3,
          name: 'Learn JavaScript',
          done: true
        },
        {
          id: 4,
          name: 'Learn Angular',
          done: false
        }
      ]
    },
    {
      id: 3,
      description: 'My Movies Library',
      todos: [
        {
          id: 1,
          name: 'La città incantata',
          done: true
        },
        {
          id: 2,
          name: 'Avatar',
          done: true
        },
        {
          id: 3,
          name: 'Titanic',
          done: false
        }
      ]
    }
];

// ESEMPIO 1 CON LE CALLBACK COSTRUITE DENTRO I PARAMETRI DI .FIND (FUNZIONI ANONIME)
const firstUncompletedNote_2 = notes.find(element => element.todos.find(element => element.done === false));
console.log(firstUncompletedNote_2);


// ESEMPIO 2 CON LA CALLBACK COSTRUITA ESTERNAMENTE
function firstUncompletedNote (arg) {
    const uncompletedNote = arg.find(element => element.todos.find(element => element.done === false));
    return uncompletedNote;
}

const noteInProgress = firstUncompletedNote(notes);
console.log('All notes: ', notes); 
console.log('First note in progress: ', noteInProgress);

// ESERCIZIO SVOLTO IN PAIR PROGRAMMING DA TOMMASO E GIUSEPPE
