(function(exports){
  var colors = require('colors');
  function Tardigrade(){
    space = "   ";
  }

  Tardigrade.prototype = {
    describe: function(title, testFunction){
      console.log(title);
      testFunction();
    },

    it: function(title, testFunction){
      console.log(space + title);
      testFunction(title);
    },

    isTrue: function(assertionToCheck) {
      if (!assertionToCheck) {
        console.log((space.repeat(2) + "Assertion failed: " + assertionToCheck + " is not truthy").red);
      } else {
        console.log(space.repeat(2) + "passed".green);
      }
    },

    isFalse: function(assertionToCheck) {
      if (assertionToCheck) {
        throw new Error((space.repeat(2) + "Assertion failed: " + assertionToCheck + " is not falsey").red);
      } else {
        console.log(space.repeat(2) + "passed".green);
      }
    }
  },

  exports.tardigrade = Tardigrade;
})(this);
