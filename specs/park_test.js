var assert = require('assert');
var Dinosaur = require('../dinosaur.js');
var Park = require('../park.js');

describe('Park', function(){
  var dinosaur1;
  var dinosaur2;
  var dinosaur3;
  var dinosaur4;
  var park;

  beforeEach(function(){
    park = new Park();
    dinosaur1 = new Dinosaur ("Tyrannosaurus", 3);
    dinosaur2 = new Dinosaur ("Velociraptor", 4);
    dinosaur3 = new Dinosaur ("Triceratops", 1);
    dinosaur4 = new Dinosaur ("Triceratops", 2);
  })

  it('park enclosure should start empty', function(){
    assert.strictEqual(park.numOfDinosaurs(), 0);
  });

  it('add dinosaur to enclosure', function(){
    park.addDinosaur();
    assert.strictEqual(park.enclosure.length, 1);
  });

  it('should be able to remove all dinosaurs of a particular type', function(){
    park.addDinosaur();
    assert.strictEqual(park.enclosure.length, 1);
    park.removeOfType("Triceratops");
    assert.strictEqual(park.enclosure.length, 0);
  });

  it('should get all the dinosaurs with an offspring count of more than 2', function(){
    allTheDinos = [dinosaur1, dinosaur2, dinosaur3, dinosaur4];
    assert.strictEqual(park.moreThanTwoOffspring(), 2);
  });

});