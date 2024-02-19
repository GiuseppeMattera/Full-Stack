function runCallbacks(callbacks) {
    for (let i=0; i<callbacks.length; i++) {
        callbacks[i]();
    }
}

function firstCallback() {
    console.log(`This is the first callback`);
}

function secondCallback() {
    console.log(`This is the second callback`);
}
  
function thirdCallback() {
    console.log(`This is the third callback`);
}

const callbackArray = [firstCallback, secondCallback, thirdCallback];
runCallbacks(callbackArray);
