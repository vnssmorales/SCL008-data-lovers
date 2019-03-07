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
});

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
});

describe('Funcion showData', () => {

  const dataShow = [

    {id: 50, name: 'Diglett'},
    {id: 68, name: 'Machamp'},
    {id: 80, name: 'Slowbro'},
    {id: 125, name: 'Electabuzz'},

]

//Test ordenar de A-Z//
it('debería retornar los objetos Diglet, Machamp, SLowbro y Electabuzz ordenados como: Diglett, Electabuzz, Machamp y Slowbro', () => {
  assert.deepEqual(window.sortData(dataShow,'az'), 

  [{id: 50, name: 'Diglett'},
   {id: 125, name: 'Electabuzz'},
   {id: 68, name: 'Machamp'},
   {id: 80, name: 'Slowbro'},

  ])
})
});

describe('Funcion showData', () => {

  const dataShowReverse = [

    {id: 85, name: 'Dodrio'},
    {id: 22, name: 'Fearow'},
    {id: 1, name: 'Bulbasaur'},
    {id: 138, name: 'Omanyte'},

]

//Test ordenar de Z-A//
it('debería retornar los objetos Dodrio, Fearow, Bulbasaur y Omanyte ordenados como: Omanyte, Fearow, Dodrio y Bulbasaur', () => {
  assert.deepEqual(window.sortData(dataShowReverse,'za'), 

  [{id: 138, name: 'Omanyte'},
   {id: 22, name: 'Fearow'},
   {id: 85, name: 'Dodrio'},
   {id: 1, name: 'Bulbasaur'},

  ])
})
})

describe('funcion sortData', () =>{

  const data3 = [

    {id: 8, name: "Wartortle"},
    {id: 9, name: "Blastoise"},
    {id: 10, name: "Caterpie"},
    {id: 14, name: "Kakuna"},
  ]

//Test ordenar por nombre de la a-z//
it('deberia retornar el objeto wartortle, Blastoide, caterpie, kakuna, al ordenar por nombre de la a-z',() => {
assert.deepEqual(window.sortData(data3, 'az'),
[{id: 9, name: "Blastoise"},
{id: 10, name: "Caterpie"},
{id: 14, name: "Kakuna"},
{id: 8, name: "Wartortle"},
])
})
})

describe('funcion sortData', () => {

  const data4 = [

    {id: 77, name: "Ponyta"},
    {id: 80, name: "Slowbro"},
    {id: 82, name: "Magneton"},
    {id: 85, name: "Dodrio"},
  ]

  //Test ordenar por nombre de la z-a//
  it('deberia retornar el objeto Ponyta, Slowbro, Magneton, Dodrio, al ordenar por nombre de la z-a',() => {
  assert.deepEqual(window.sortData(data4, 'za'),
  [{id: 80, name: "Slowbro"},
   {id: 77, name: "Ponyta"},
   {id: 82, name: "Magneton"},
   {id: 85, name: "Dodrio"},
])
  })
})
