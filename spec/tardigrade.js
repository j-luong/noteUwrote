(function(exports){
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
        console.log((space.repeat(2) + "Assertion failed: " + assertionToCheck + " is not truthy"));
      } else {
        console.log(space.repeat(2) + "passed");
      }
    },

    isFalse: function(assertionToCheck) {
      if (assertionToCheck) {
        throw new Error((space.repeat(2) + "Assertion failed: " + assertionToCheck + " is not falsey"));
      } else {
        console.log(space.repeat(2) + "passed");
      }
    }
  };

  exports.tardigrade = Tardigrade;
})(this);
