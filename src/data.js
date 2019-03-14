
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
    ordered = data.sort(sortBy);
  } if (sortOrder === 'za') {
    ordered = data.sort(sortBy).reverse();
  }
  return ordered;
}

function sortBy(a, b) {
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}

const sortCandy = (data, candyOrder) => {
  let orderCandys = [];

  if (candyOrder === 'asc') {
    orderCandys = data.sort(sortByCandy);
  } if (candyOrder === 'desc') {
    orderCandys = data.sort(sortByCandy).reverse();
  }
  return orderCandys;
}

function sortByCandy(a, b) {
  if (a.candy_count < b.candy_count)
    return -1;
  if (a.candy_count > b.candy_count)
    return 1;
  return 0;
}

const computeStats = (data) => {
  let quantity = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].type.includes('Poison') === true) {
      quantity.push(data[i]);
    }

  }
  let calculate = (quantity.length * 100) / data.length;
  let resultCalculate = calculate.toFixed(1);
  return resultCalculate;
}

window.sortData = sortData;
window.filterData = filterData;
window.filterDataType = filterDataType;
window.sortCandy = sortCandy;
window.computeStats = computeStats;
