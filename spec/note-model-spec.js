var Note        = this.note;
var Tardigrade  = this.Tardigrade;
var noteTest    = new Note("Hello world");
var tardigrade  = new Tardigrade();
var describe    = tardigrade.describe;
var it          = tardigrade.it;

describe('test show message', function(){
  it('show message should return "Hello world"', function(){
    tardigrade.isTrue(noteTest.showMessage() === "Hello world");
  });
});
