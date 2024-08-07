const BASE_URL = 'https://swapi.dev/api'


const loadCategories = async () => {
    const response = await fetch(`${BASE_URL}`);
    const data = await response.json();
    const categoryList = Object.keys(data);
    console.log(categoryList);

    const categoriasIpt = document.getElementById('categoriasIpt');

    categoryList.forEach((category) => {
        const newOption = document.createElement('option');
        newOption.value = category;
        newOption.innerText = category.toUpperCase();
        categoriasIpt.appendChild(newOption);
    });

}

const handleSearchForm = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    searchCategory(formData.get('category'), 1);
}

const searchCategory = async (category, page) => {
    const response = await fetch(`${BASE_URL}/${category}?page=${page}`);
    const data = await response.json();
    console.log(data);
    const resultList = data.results;
    const resultadosList = document.getElementById('resultadosList');
    resultadosList.innerHTML = '';
    resultList.forEach((result) => {
        const newLi = document.createElement('li');
        switch (category) {

            case 'species':
            case 'planets':
            case 'vehicles':
            case 'starships':
            case 'people':
                newLi.innerText = result.name;
                break;
            case 'films':
                newLi.innerText = result.title;
                break;
        }

        resultadosList.appendChild(newLi);
    });

    const pages = Math.ceil(data.count / 10);
    console.log(pages);

    const paginationList = document.getElementById('paginationList');
    paginationList.innerHTML = '';

    for (let i = 1; i <= pages; i++) {
        const newLink = document.createElement('a');
        newLink.href = '#';
        newLink.innerText = i;
        newLink.onclick = () => searchCategory(category, i);
        if(i === page){
            newLink.classList.add('selectedLink');
        }
        paginationList.appendChild(newLink);
    }
}


loadCategories();