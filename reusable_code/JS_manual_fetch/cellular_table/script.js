const $tbody = document.querySelector("#tbody");
const $prevBtn = document.querySelector("#prev");
const $nextBtn = document.querySelector("#next");
const $currentPageSpan = document.querySelector("#currentPage");
const $totalPagesSpan = document.querySelector("#totalPages");

const API_URL = "https://dummyjson.com/products";

const state = {
    data: [],
    _data: [],
    paginationInfo: {
        page: 1,
        totalePages: 1,
        limit: 5,
        hasPrevPage: false,
        hasNextPage: false
    }
}

const utilities = {
    generateTableRow: (item) => {
        return `
            <tr>
                <td>${item.id}</td>
                <td>${item.title}</td>
                <td>${item.price}</td>
                <td>${item.category}</td>
                <td>
                    <img src="${item.thumbnail}" />
                </td>
            </tr>
        `
    }
}

const fetchData = async () => {
    try {
        const response = await fetch(API_URL, { method: "GET"});
        const result = await response.json();

        if(response.ok){
            state._data = result.products;
        } else {
            throw new Error(result);
        }
    } catch (error) {
        console.log(error);
    }
}

const paginateData = () => {
    const startIndex = state.paginationInfo.limit * (state.paginationInfo.page - 1);

    state.paginationInfo.totalePages = Math.ceil(state._data.length / state.paginationInfo.limit);
    state.paginationInfo.hasPrevPage = state.paginationInfo.page > 1;
    state.paginationInfo.hasNextPage = state.paginationInfo.page < state.paginationInfo.totalePages;

    state.data = [...state._data].splice(startIndex, state.paginationInfo.limit);

    $currentPageSpan.innerHTML = state.paginationInfo.page;
    $totalPagesSpan.innerHTML = state.paginationInfo.totalePages;

    if(state.paginationInfo.hasPrevPage) {
        $prevBtn.removeAttribute("disabled");
    } else {
        $prevBtn.setAttribute("disabled", true);
    }

    if(state.paginationInfo.hasNextPage) {
        $nextBtn.removeAttribute("disabled");
    } else {
        $nextBtn.setAttribute("disabled", true);
    }
}

const renderData = () => {
    const HTML = state.data.map(item => utilities.generateTableRow(item)).join("");

    $tbody.innerHTML = HTML;
}

const render = () => {
    paginateData();
    renderData();
}

const setListeners = () => {
    $prevBtn.addEventListener("click", () => {
        if(state.paginationInfo.page > 1) {
            state.paginationInfo.page--;
            render();
        }
    });
    $nextBtn.addEventListener("click", () => {
        if(state.paginationInfo.page < state.paginationInfo.totalePages) {
            state.paginationInfo.page++;
            render();
        }
    });
}

const init = async () => {
    await fetchData();
    render();
    setListeners();
}

init();