const $tbody = document.querySelector("#tbody");

const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=151";

const state = {
    data: {},
    nestedData: []
}

const utilities = {
    generateTableRow: (item) => {
        return `
            <tr>
                <td>${item.name}</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            `
    }
}

const fetchNestedData = async (item) => {
    try {
        let aaa = await item.map(async element => {
            let response = await fetch(element.url, { method: "GET"});
            if(response.ok){
                let result = await response.json();
                state.nestedData.push(result);
            } else {
                throw new Error(response);
            }
        });
    } catch (error) {
        console.log(error.message);
    }
}


const fetchData = async () => {
    try {
        const response = await fetch(API_URL, { method: "GET"});
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
    const HTML = state.data.results.map(item => utilities.generateTableRow(item)).join("");

    $tbody.innerHTML = HTML;
}

const init = async () => {
    await fetchData();
    await fetchNestedData(state.data.results);
    renderData();
    
    console.log(state.nestedData);
}

init();