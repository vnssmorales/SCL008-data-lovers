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

const showData = (data) => {
    data.forEach(element => {
        container.innerHTML = `<p>${element.weaknesses}</p>
        <img class="image" src="${element.img}" alt="${element.weaknesses}">`
})
}

/*document.getElementById('select-weaknesses').addEventListener('change', () => {
 let condition = document.getElementById('select-weaknesses').value;
 let result = window.filterData(data,condition);

 container.innerHTML ="";
 result.forEach(element => {
     container.innerHTML += `<p>${element.weaknesses}</p>
     <img class="image" src="${element.img}" alt="${element.weaknesses}">`
})
}); */
    

window.onload = showData(data);