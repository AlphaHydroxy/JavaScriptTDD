var Park = function(){
  this.enclosure = [];
};

Park.prototype = {
  numOfDinosaurs: function(){
    return this.enclosure.length;
  },

  addDinosaur: function(dinosaur){
    this.enclosure.push(dinosaur);
  },

  removeOfType: function(type){
    for(var dinosaur of this.enclosure){
      if(dinosaur.type != type){
        removeByType.splice(dinosaur);
      }
    }
  },

  moreThanTwoOffspring: function(){
    var counter = 0;
    for(var dinosaur of this.enclosure){
      if(dinosaur.offSpring > 2){
        counter ++;
      }
    }
  }
};
module.exports = Park;