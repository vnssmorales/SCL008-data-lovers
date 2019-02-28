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


const sortData = (data, condition) => {
  let ordered = [];

  if (condition === 'az') {
    ordered = data.sort(sortByName);
}if(condition === 'za'){
    ordered = data.sort(sortByName).reverse();
}

}
function sortByName (a,b){
  if(a.name < b.name)
  return -1;
  if(a.name > b.name)
  return -1;
  return 0;
}

window.sortData = sortData;
window.filterData = filterData;
window.filterDataType = filterDataType;
