global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');


describe('example', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof example, 'function');
  });

  it('debería retornar "example"', () => {
    assert.equal(example(), 'example');
  });
})

describe('data.filterName',() => {

  it('debería ser una función',() => {
    assert.equal(typeof data.filterName, 'function');
  });  
  it('debería retornar "filterName" para', () => {
    assert.equal(data.filterName)
});
});