var Note        = require('../note-model').note;
var Tardigrade  = require('./tardigrade').tardigrade;

function testingShowMessage() {
  var noteTest    = new Note("Hello world");
  var tardigrade  = new Tardigrade();

  tardigrade.isTrue(noteTest.showMessage());
}
testingShowMessage();
