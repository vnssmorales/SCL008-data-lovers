/* Manejo del DOM */

/*const btnStart = document.getElementsByTagName('button')[0];

btnStart.addEventListener('click', () => {
document.getElementById('root').innerHTML = '';
document.getElementById('root').innerHTML += `<h3 class="title">Este es Bulbasaur</h3>
<img src="http://www.serebii.net/pokemongo/pokemon/001.png" alt="Bulbasaur">`
for (let i = 0; i < names1.length; i++) {
document.getElementById('root').innerHTML += `<p>${names1[i]}</p>`
}
}); */

const data = window.POKEMON.pokemon;
const container = document.getElementById('root');
container.innerHTML ="";

const showData = (data) => {
    data.forEach(element => {
        container.innerHTML += `<div class="card">
        <img src="${element.img}" class="card-img-top" alt="${element.weaknesses}">
        <div class="card-body">
        <p class="card-text">${element.name}</p>
        <p class="card-text">${element.weaknesses}</p>`
})
}

document.getElementById('select-weaknesses').addEventListener('change', () => {
 let condition = document.getElementById('select-weaknesses').value;
 let result = window.filterData(data,condition);

 container.innerHTML ="";
 result.forEach(element => {
     container.innerHTML += `<div class="card">
     <img src="${element.img}" class="card-img-top" alt="${element.weaknesses}">
     <div class="card-body">
     <p class="card-text">${element.name}</p> 
     <p class="card-text">${element.weaknesses}</p>`
 })
})
;
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
 
/* const sortData = (data) => {
    data.sort(element => {

    })
} */

window.onload = showData(data);
window.onload = showData2(data);