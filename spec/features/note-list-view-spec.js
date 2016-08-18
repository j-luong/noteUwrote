var Tardigrade   = this.Tardigrade;
var expect       = new Tardigrade();
var describe     = expect.describe;
var it           = expect.it;


function setUp(callback) {
  window.onload = function() {
  document.getElementById('note-message').value = "Hello";
  clickButton();
  callback();
};
}

function clickButton() {
  document.getElementById('save-note-button').click();
}

describe('adding a new note', function() {

  it('saves and shows a note', function(){
    setUp();
      document.setTimeout(function (){expect.isTrue(document.getElementById("messages").innerHTML === "Hello");}, 500);
  });
});

var Test = function() {
  expect.isTrue(document.getElementById("messages").innerHTML === "Hello");
};


setUp(function() {
  Test();
});
