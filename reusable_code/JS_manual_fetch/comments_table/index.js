const $tbody = document.querySelector("#tbody");
const $prevBtn = document.querySelector("#prevPage");
const $nextBtn = document.querySelector("#nextPage");
const $currentPage = document.querySelector("#currentPage");
const $totalPages = document.querySelector("#totalPages");

const API_URL = "https://dummyjson.com/todos";

const state = {
    data: [],
    _data: [],
    paginationInfo: {
        page: 1,
        totalPages: 1,
        limit: 6,
        hasPrevPage: false,
        hasNextPage: false
    }
}

const utilities = {
    generateTableRow: (item) => {
        return `
        <tr>
            <td>${item.id}</td>
            <td>${item.todo}</td>
            <td>${item.userId}</td>
            <td>${item.completed ? "Yes" : "No"}</td>
        </tr>
        `
    }
}

const startIndex = () => {
    const startIndex = state.paginationInfo.limit * (state.paginationInfo.page - 1);

    state.paginationInfo.hasPrevPage = state.paginationInfo.page > 1;
    state.paginationInfo.hasNextPage = state.paginationInfo.page < state.paginationInfo.totalPages;

    state.data = [...state._data].splice(startIndex, state.paginationInfo.limit);

    if()
}

const fetchData = async () => {
    try {
        const response = await fetch(API_URL, { method: "GET" });
        const result = await response.json();

        if(response.ok) {
            state._data = result.todos;
        }else{
            throw new Error(response);
        }
    } catch (error) {
        console.log(error);
    }
}

const renderData = () => {
    const HTML = state._data.map(item => utilities.generateTableRow(item)).join("");

    $tbody.innerHTML = HTML;
}

const render = () => {
    renderData()
}

const init = async () => {
    await fetchData();
    render();
}

init();