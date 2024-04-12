const $tbody = document.querySelector("#tbody");

const API_URL = "https://datausa.io/api/data?drilldowns=Nation&measures=Population";

const state = {
    data: []
}

const utilities = {
    generateTableRow: (item) => {
        return `
        <tr>
            <td>${item["ID Nation"]}</td>
            <td>${item.Nation}</td>
            <td>${item.Year}</td>
            <td>${item.Population}</td>
            <td>
                <a href="/${item["Slug Nation"]}">${item.Nation}</a>
            </td>
        </tr>
        `
    }
}

const fetchData = async () => {
    try {
        const response = await fetch(API_URL, { method: "GET" });
        const result = await response.json();

        if(response.ok) {
            state.data = result.data;
        }else{
            throw new Error(response);
        }
    } catch (error) {
        console.log(error);
    }
}

const renderData = () => {
    const elementHTML = state.data.map(item => utilities.generateTableRow(item)).join("");

    $tbody.innerHTML = elementHTML;
}

const init = async () => {
    await fetchData();
    renderData();
}

init();