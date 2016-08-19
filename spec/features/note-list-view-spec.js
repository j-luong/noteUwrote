var Tardigrade   = this.Tardigrade;
var expect       = new Tardigrade();
var describe     = expect.describe;
var it           = expect.it;

describe('adding a new note', function() {
  it('note contains "Hello"', function(){
    document.getElementById('note-message').value = "Hello";
    document.getElementById('save-note-button').addEventListener("click", function(clickEvent) {
      clickEvent.preventDefault();
    });
    document.getElementById('save-note-button').click();

    expect.isTrue(document.getElementById("messages").innerHTML === "Hello");
  });

  // it('homepage contains "noteÜwrote"', function(){
  //   console.log("CONTENTS" + document.querySelector("h1").textContent);
  //   expect.isTrue(document.querySelector("h1").textContent === "noteÜwrote");
  // });
});
