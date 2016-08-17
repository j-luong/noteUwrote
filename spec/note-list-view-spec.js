var Note        = this.note;
var NoteList    = this.noteList;
var Tardigrade  = this.Tardigrade;
var expect      = new Tardigrade();
var describe    = expect.describe;
var it          = expect.it;

describe('note list view', function(){
  it('returns a string', function(){
    expect.isTrue(notelistview.noteContent() === "Hello");
  });
});
