/* Manejo de data */

//crear una funcion que filtre tipo de pokemones//

<<<<<<< HEAD
const example = ()  => {
  return 'example';
};

window.example = example;

//crear una función que filtre por debilidades de pokemones//


//crear una funcion que ordene por nombre de pokemon, de la A-Z y de la Z-A//
const dataorder = (data, condition) => {
  let order = [];
  if (condition === 'az') {
    order = data.sort(orderByName);
  }
  if (condition === 'za') {
    order = data.sort(orderByName).reverse();
}
if (condition === 'idasc') {
  order = data.sort(orderById);
}
if (condition === 'iddesc') {
  order = data.sort(orderById).reverse();
}

return ordered;

};
//document.get
=======
/*const example = () => {
  return 'example';
};

window.example = example;*/

const filterData = (data, condition) => {
  let filter = data.filter(element => {
    return element.weaknesses === condition;
  })
   console.log(filter)
  return filter;
}

window.filterData = filterData;
>>>>>>> 4d150bd90ffd209b905c5e2ea4b1f8cb4f5b500b
