global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

describe('Función filterDataType', () => {

const data = [

    {name: 'Charmander',type: 'Fire'},
    {name: 'Pinsir',type: 'Bug'},

]

 //Test filtro por tipo//
 it('debería retornar el objeto Charmander al filtrar por tipo Fire', () => {
  assert.deepEqual(window.filterDataType(data,'Fire'), [{name: 'Charmander',type: 'Fire'}] )
})
it('debería retornar el objeto Pinsir al filtrar por tipo Bug', () => {
  assert.deepEqual(window.filterDataType(data,'Bug'), [{name: 'Pinsir',type: 'Bug'}] )
})
})
;

describe('Función filterData', () => {

 const data2 = [

   {name: 'Raichu',weaknesses: 'Ground'},
   {name: 'Mewtwo',weaknesses: 'Dark'},

]

//Test filtro por debilidad//Raichu
it('debería retornar el objeto Raichu al filtrar por tipo Ground', () => {
  assert.deepEqual(window.filterData(data2,'Ground'), [{name: 'Raichu',weaknesses: 'Ground'}] )
})
it('debería retornar el objeto Mewtwo al filtrar por tipo Dark', () => {
  assert.deepEqual(window.filterData(data2,'Dark'), [{name: 'Mewtwo',weaknesses: 'Dark'}] )
})
})



