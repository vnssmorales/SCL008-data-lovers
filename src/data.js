
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

const computeStats = (data,condition) => {
  let compute = 0;
  data.forEach(element => {
      if(element.type.includes(condition)){
        compute = compute+1;
}
});
return Math.round((compute/151)*100)+'%';
};

window.sortData = sortData;
window.filterData = filterData;
window.filterDataType = filterDataType;
window.computeStats = computeStats;
