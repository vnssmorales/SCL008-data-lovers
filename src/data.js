/* Manejo de data */

//crear una funcion que filtre tipo de pokemones//

/*const example = () => {
  return 'example';
};
window.example = example;*/



const filterData = (data, condition) => {
  let filter = data.filter(element => {
    return element.weaknesses.includes(condition) === true;
<<<<<<< HEAD
=======
  })

  return filter;
}

const filterDataType = (data, condition) => {
  let filter = data.filter(element => {
    return element.type.includes(condition) === true;
>>>>>>> 82b9f97c8f0b74d53d79e9a9e675576ae30f6b99
  })

  return filter;
}

window.filterData = filterData;
<<<<<<< HEAD
=======

window.filterDataType = filterDataType;
>>>>>>> 82b9f97c8f0b74d53d79e9a9e675576ae30f6b99
