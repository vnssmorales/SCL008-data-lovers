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

const sortData = (data, sortOrder) => {
  let ordered = [];

  if (sortOrder === 'az') {
   ordered = data.sort(sortByname);
  }if (sortOrder === 'za'){
    orderer = data.sort(sortByname).reverse();
  }
   return ordered;
  } 

function sortByname (a,b){
  if (a.name < b.name)
  return -1;
  if (a.name > b.name )
  return  1;
}

window.sortData = sortData;
window.filterData = filterData;
window.filterDataType = filterDataType;
