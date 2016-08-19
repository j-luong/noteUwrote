var Tardigrade  = this.Tardigrade;
var expect      = new Tardigrade();
var describe    = expect.describe;
var it          = expect.it;


describe('note-list-controller', function(){

  it('displays a note', function(){
    window.addEventListener("load", function(){
      setTimeout(function(){
        expect.isTrue(document.getElementById('messages').innerHTML ===
        "<ul><li>This is a test</li></ul>");
      },2000);

      });

    });

  });
