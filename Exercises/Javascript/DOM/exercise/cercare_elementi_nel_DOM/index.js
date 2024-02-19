const $allInput = document.querySelectorAll(".form-input");
const $form = document.querySelector("form");

const person = {
    firstName: $allInput[0].value,
    lastName: $allInput[1].value,
    age: $allInput[2].value
}

const jsonObj = JSON.stringify(person);
$form.setAttribute("data-person", jsonObj);
