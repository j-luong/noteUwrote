var Tardigrade   = this.Tardigrade;
var expect       = new Tardigrade();
var describe     = expect.describe;
var it           = expect.it;
// wait for page to load

describe('notes list view', function(){

  it('saves and shows a note', function(){
    document.getElementById('note-message').value = "Hello";
    document.getElementById('save-note-button').click();
    expect.isTrue(get element by id messages.innerHTML === "Hello");
  });


  // it('displays multiple notes', function(){
  //   document.getElementById('note-message').value = "Hello"
  //   document.getElementById('note-message').value = "World";
  //   document.getElementById('save-note-button').click()
  //   expect.isTrue(get element by id messages.innerHTML === "Hello");
  // });

  // it('displays first 30 characters of multiple notes', function(){
  //   document.getElementById('note-message').value = "Hello Hello Hello Hello Hello Hello";
  //   document.getElementById('save-note-button').click()
  //   expect.isTrue(get element by id messages.innerHTML === "Hello Hello Hello Hello Hello Hel");
  // });

  // it('displays full note if clicked', function(){
  //   document.getElementById('note-message').value = "Hello Hello Hello Hello Hello Hello";
  //   document.getElementById('save-note-button').click();
  //   get element by id note-id click()
  //   expect.isTrue(document.getElementById('messages').innerHTML === "Hello Hello Hello Hello Hello Hello");
  // });

});
