const $unorderList = document.querySelector("ul");
const $input = document.querySelector("input");

const state = {
  InputValue: ``
}

$input.addEventListener("input", (event) => {
  state.InputValue = event.target.value;
})

const addProduct = () => { 
 $input.setAttribute(`value`, `${state.InputValue}`);

  $unorderList.innerHTML += `
  <label for="${state.InputValue}">
    <li>${state.InputValue}</li>
  </label>
  <input type="checkbox" id="${state.InputValue}" />
  `
};
