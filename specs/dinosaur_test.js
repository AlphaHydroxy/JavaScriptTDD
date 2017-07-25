var assert = require('assert');
var Dinosaur = require('../dinosaur.js');

describe('Dinosaur', function(){
  var dinosaur;
  
  beforeEach(function(){
    dinosaur = new Dinosaur("Tyrannosaurus", 3);
});

it('dinosaur should have a type', function(){
  assert.strictEqual(dinosaur.type, "Tyrannosaurus");
});

it('dinosaur should have a number of offspring per year', function(){
  assert.strictEqual(dinosaur.offSpring, 3);
});
});