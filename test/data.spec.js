global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');


/*describe('Función filterData', () => {
  const data = [
    {
      name: 'Charmander',
      type: 'Fire'
    },
    {
      name:'Squirtle',
      type:'Water'
    }
  ]
  
  it('debería retornar el objeto Charmander al filtrar', () => {
    assert.deepEqual(window.filterData(data, 'Fire'), [{name: 'Charmander' , type: 'Fire'}])
  })

  it('debería retornar el objeto Squirtle al filtrar', () => {
    assert.deepEqual(window.filterData(data, 'Water'), [{name: 'Squirtle' , type: 'Water'}])
  })
})
*/