const $sum = document.querySelector("#sum");
const $addition = document.querySelector("#addition");
const $subtraction = document.querySelector("#subtraction");
const $multiplication = document.querySelector("#multiplication");
const $division = document.querySelector("#division");
const $one = document.querySelector("#one");
const $two = document.querySelector("#two");
const $three = document.querySelector("#three");
const $four = document.querySelector("#four");
const $five = document.querySelector("#five");
const $six = document.querySelector("#six");
const $seven = document.querySelector("#seven");
const $eight = document.querySelector("#eight");
const $nine = document.querySelector("#nine");
const $zero = document.querySelector("#zero");
const $dot = document.querySelector("#dot");
const $canc = document.querySelector("#AC");
const $equals = document.querySelector(".grid__equals");

const state = {
    counter: 0,
    previous: 0,
    total: 0,
    mode: null,
};

$equals.addEventListener("click", () => {
    switch (state.mode) {
        case $addition.innerHTML:
            if (state.mode = $addition.innerHTML && state.total === 0) {
                state.total = Number(state.previous) + Number(state.counter);
                $sum.innerHTML = state.total;
                state.mode = $addition.innerHTML;
            } else if (state.mode = $addition.innerHTML && state.total !==0) {
                state.total = Number(state.total) + Number(state.counter);
                $sum.innerHTML = state.total;
                state.mode = $addition.innerHTML;
            }
            break;
        case $multiplication.innerHTML:
            if (state.mode = $multiplication.innerHTML && state.total === 0) {
                state.total = Number(state.counter) * Number(state.previous);
                state.previous = state.total;
                $sum.innerHTML = state.total;
                state.mode = $multiplication.innerHTML;
            } else if (state.mode = $multiplication.innerHTML && state.total !== 0) {
                state.total = Number(state.total) * Number(state.counter);
                $sum.innerHTML = state.total;
                state.mode = $multiplication.innerHTML;
            }
            break;
        case $subtraction.innerHTML:
            if (state.mode = $subtraction.innerHTML && state.total === 0) {
                state.total = Number(state.previous) - Number(state.counter);
                $sum.innerHTML = state.total;
                state.mode = $subtraction.innerHTML;
            } else if (state.mode = $subtraction.innerHTML && state.total !== 0) {
                state.total = Number(state.total) - Number(state.counter);
                $sum.innerHTML = state.total;
                state.mode = $subtraction.innerHTML;
            }
            break;
        case $division.innerHTML:
            if (state.mode = $division.innerHTML && state.total === 0) {
                state.total = Number(state.previous) / Number(state.counter);
                state.previous = state.total;
                $sum.innerHTML = state.total;
                state.mode = $division.innerHTML;
            } else if (state.mode = $division.innerHTML && state.total !== 0) {
                state.total = Number(state.total) / Number(state.counter);
                $sum.innerHTML = state.total;
                state.mode = $division.innerHTML;
            }
            break;
        default:
            console.log("Errore di qualche tipo!");
    }
});

$addition.addEventListener("click", () => {
        state.mode = $addition.innerHTML;
        state.previous = state.counter;
        state.counter = 0;
});

$multiplication.addEventListener("click", () => {
    state.mode = $multiplication.innerHTML;
    state.previous = state.counter;
    state.counter = 0;
});

$subtraction.addEventListener("click", () => {
    state.mode = $subtraction.innerHTML;
    state.previous = state.counter;
    state.counter = 0;
});

$division.addEventListener("click", () => {
    state.mode = $division.innerHTML;
    state.previous = state.counter;
    state.counter = 0;
});

$canc.addEventListener("click", () => {
    state.counter = 0;
    state.previous = 0;
    state.total = 0;
    state.mode = null;
    $sum.innerHTML = state.counter;
});

$one.addEventListener("click", () => {
    if (state.counter === 0) {
        state.counter += 1;
        $sum.innerHTML = state.counter;
    } else {
        state.counter = state.counter + $one.innerHTML;
        $sum.innerHTML = state.counter;
    }
});

$two.addEventListener("click", () => {
    if (state.counter === 0) {
        state.counter += 2;
        $sum.innerHTML = state.counter;
    } else {
        state.counter = state.counter + $two.innerHTML;
        $sum.innerHTML = state.counter;
    }
});

$three.addEventListener("click", () => {
    if (state.counter === 0) {
        state.counter += 3;
        $sum.innerHTML = state.counter;
    } else {
        state.counter = state.counter + $three.innerHTML;
        $sum.innerHTML = state.counter;
    }
});

$four.addEventListener("click", () => {
    if (state.counter === 0) {
        state.counter += 4;
        $sum.innerHTML = state.counter;
    } else {
        state.counter = state.counter + $four.innerHTML;
        $sum.innerHTML = state.counter;
    }
});

$five.addEventListener("click", () => {
    if (state.counter === 0) {
        state.counter += 5;
        $sum.innerHTML = state.counter;
    } else {
        state.counter = state.counter + $five.innerHTML;
        $sum.innerHTML = state.counter;
    }
});

$six.addEventListener("click", () => {
    if (state.counter === 0) {
        state.counter += 6;
        $sum.innerHTML = state.counter;
    } else {
        state.counter = state.counter + $six.innerHTML;
        $sum.innerHTML = state.counter;
    }
});

$seven.addEventListener("click", () => {
    if (state.counter === 0) {
        state.counter += 7;
        $sum.innerHTML = state.counter;
    } else {
        state.counter = state.counter + $seven.innerHTML;
        $sum.innerHTML = state.counter;
    }
});

$eight.addEventListener("click", () => {
    if (state.counter === 0) {
        state.counter += 8;
        $sum.innerHTML = state.counter;
    } else {
        state.counter = state.counter + $eight.innerHTML;
        $sum.innerHTML = state.counter;
    }
});

$nine.addEventListener("click", () => {
    if (state.counter === 0) {
        state.counter += 9;
        $sum.innerHTML = state.counter;
    } else {
        state.counter = state.counter + $nine.innerHTML;
        $sum.innerHTML = state.counter;
    }
});

$zero.addEventListener("click", () => {
    if (state.counter === 0) {
        state.counter += 0;
        $sum.innerHTML = state.counter;
    } else {
        state.counter = state.counter + $zero.innerHTML;
        $sum.innerHTML = state.counter;
    }
});

$dot.addEventListener("click", () => {
    state.counter = state.counter + $dot.innerHTML;
    $sum.innerHTML = state.counter;
});
