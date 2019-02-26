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
        container.innerHTML += `<p>${element.name}</p>
        <img class="image" src="${element.img}" alt="${element.weaknesses}">
        <p>${element.weaknesses}</p>`
})
}

document.getElementById('select-weaknesses').addEventListener('change', () => {
 let condition = document.getElementById('select-weaknesses').value;
 let result = window.filterData(data,condition);
 console.log(condition);

 container.innerHTML ="";
 result.forEach(element => {
     container.innerHTML += `<p>${element.name}</p> 
        <img class="image" src="${element.img}" alt="${element.weaknesses}">
        <p>${element.weaknesses}</p>`
 })
})
;
const showData2 = (data) => {
    data.forEach(element => {
        container.innerHTML += `<p>${element.name}</p>
        <img class="image" src="${element.img}" alt="${element.type}">
        <p>${element.type}</p>`
    })
}

document.getElementById('select-type').addEventListener('change', () => {
    let condition = document.getElementById('select-type').value;
    let result = window.filterDataType(data,condition);

    container.innerHTML ="";
    result.forEach(element => {
        container.innerHTML += `<p>${element.name}</p> 
           <img class="image" src="${element.img}" alt="${element.type}">
           <p>${element.type}</p>`
   })   

}); 
    

window.onload = showData(data);
window.onload = showData2(data);