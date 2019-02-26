/* Manejo de data */

//crear una funcion que filtre tipo de pokemones//

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