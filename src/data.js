/* Manejo de data */

//crear una funcion que filtre tipo de pokemones//

/*const example = () => {
  return 'example';
};
window.example = example;*/



const filterData = (data, condition) => {
  let filter = data.filter(element => {
    return element.weaknesses.includes(condition) === true;
  })

  return filter;
}

const filterDataType = (data, condition) => {
  let filter = data.filter(element => {
    return element.type.includes(condition) === true;
  })

  return filter;
}

const sortData = (data,sortOrder) => {
  let ordered = [];

  if (sortOrder === 'az') {
    ordered = data.sort(sortBy);
}if(sortOrder === 'za'){
    ordered = data.sort(sortBy).reverse();
} 
return ordered;
}

function sortBy (a,b){
  if(a.name < b.name)
  return -1;
  if(a.name > b.name)
  return 1;
  return 0;
}

/*const countCandy = (data,candys) => {
  let candyEvolution = [];

  if (candys == "undefined"){
    candyEvolution = "-"
  }else{candys = element.candy_count;
  }
  return candyEvolution;
}*/


window.sortData = sortData;
window.filterData = filterData;
window.filterDataType = filterDataType;
//window.countCandy = countCandy;//

