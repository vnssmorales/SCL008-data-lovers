/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/*const example = () => {
  return 'example';
};

window.example = example;*/

const filterData = (data, condition) => {
  let filter = data.filter(element => {
    return element.weaknesses === condition;
  })
  return filter;
}

window.filterData = filterData;
