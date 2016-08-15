(function(exports){
  function Tardigrade(){}

  Tardigrade.prototype = {
    isTrue: function(assertionToCheck) {
      if (!assertionToCheck) {
        throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
      } else {
        console.log(".");
      }
    },

    isFalse: function(assertionToCheck) {
      if (assertionToCheck) {
        throw new Error("Assertion failed: " + assertionToCheck + " is not falsey");
      } else {
        console.log(".");
      }
    }
  };

  exports.tardigrade = Tardigrade;
})(this);
