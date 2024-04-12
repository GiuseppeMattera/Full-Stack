const $container = document.querySelector("#container");

const API_URL = "https://jsonplaceholder.typicode.com/comments";

const state = {
    data: []
}

const utilities = {
    generateCard: (item) => {
        return `
            <h4>${item.name}</h4>
            <h3>ID n°: ${item.id}</h3>
            <a href="mailto:${item.email}">Send email: ${item.email}</a>
            <p>${item.body}</p>
        `
    }
}

const fetchData = async () => {
    try {
        const response = await fetch(API_URL);
        const result = await response.json();

        if(response.ok) {
            state.data = result;
        } else {
            throw new Error(result);
        }
    } catch (error) {
        console.log(error.message);
    }
}

const renderData = () => {
    const $element = document.createElement("div");
    const HTML = state.data.map((item) => utilities.generateCard(item)).join("");

    $element.innerHTML = HTML;
    $container.appendChild($element);
}

const init = async () => {
    await fetchData();
    renderData();
}

init();
