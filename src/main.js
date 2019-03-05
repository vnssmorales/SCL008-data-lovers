/* Manejo del DOM */

const data = window.POKEMON.pokemon;
const container = document.getElementById('root');
container.innerHTML ="";

//filtro por debilidad de pokemon//

const showData = (data) => {
    data.forEach(element => {
        container.innerHTML += `<div class="card">
        <img src="${element.img}" class="card-img-top" alt="${element.weaknesses}">
        <div class="card-body">
        <p class="card-text">${element.name}</p>
        <p class="card-text">${element.weaknesses}</p>
        </div>
        </div>`
})
}

document.getElementById('select-weaknesses').addEventListener('change', () => {
 let condition = document.getElementById('select-weaknesses').value;
 let result = window.filterData(data,condition);

 container.innerHTML ="";
 result.forEach(element => {
     container.innerHTML += `<div class="card">
     <img src="${element.img} " class="card-img-top" alt"${element.weaknesses}">
     <div class="card-body">
     <p class="card-text">${element.name}</p>   
     <p class="card-text">${element.weaknesses}
     </div>
     </div>`
 })
})
;

//filtro por tipo de pokemon//

const showData2 = (data) => {
    data.forEach(element => {
        container.innerHTML += `<div class="card">
        <img src="${element.img}" class="card-img-top" alt="${element.type}">
        <div class="card-body">
        <p class="card-text">${element.name}</p>
        <p class="card-text">${element.type}</p>
        </div>
        </div>`
    })
}

document.getElementById('select-type').addEventListener('change', () => {
    let condition = document.getElementById('select-type').value;
    let result = window.filterDataType(data,condition);

    container.innerHTML ="";
    result.forEach(element => {
        container.innerHTML += `<div class="card">
        <img src="${element.img}" class="card-img-top" alt="${element.type}">
        <div class="card-body">
        <p class="card-text">${element.name}</p> 
        <p class="card-text">${element.type}</p>
        </div>
        </div>`
   })   
}); 

window.onload = showData(data);
window.onload = showData2(data);

/*ordenar pokemones por nombre 
const sortData = (data) => {
data.forEach(element => {
container.innerHTML += `<div class="card">
 <img src="${element.img}" class="card-img-top" alt="${element.name}">
 <div class="card-body">
  <p class="card-text">${element.type}</p>
  <p class="card-text">${element.name}</p>
  </div>
  </div>´
})
}

document.getElementById('select-name').addEventListener('change', () => {
    let condition = document.getElementById('select-name').value;
    let result = window.sortDataName(data,condition);

    container.innerHTML ="";
    result.forEach(element => {
        container.innerHTML += `<div class="card">
        <img src="${element.img}" class="card-img-top" alt="${element.name}">
        <div class="card-body">
        <p class="card-text">${element.name}</p> 
        <p class="card-text">${element.name}</p>
        </div>
        </div>´
})   
})
; */

