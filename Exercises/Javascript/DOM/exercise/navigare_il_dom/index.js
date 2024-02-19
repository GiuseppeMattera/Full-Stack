const $html = document.documentElement;
const $unorderList = $html.children[1].children[0];

console.log($unorderList.parentNode);
console.log($unorderList.children[1].innerText);
console.log($unorderList.children[1].nextElementSibling.innerText);
console.log($unorderList.children[1].previousElementSibling.innerText);
