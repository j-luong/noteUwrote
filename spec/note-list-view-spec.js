var NoteListView = this.noteListView;
var Tardigrade   = this.Tardigrade;
var expect       = new Tardigrade();
var describe     = expect.describe;
var it           = expect.it;
var NoteList     = this.noteList;

var noteList = new NoteList();

noteList.add("Hello");
noteList.add("World");

describe('note list view', function(){
  var noteView = new NoteListView(noteList.view());

  it('returns a string', function(){
    expect.isTrue(noteView.renderNotes() === "<ul><li>Hello</li><li>World</li></ul>");
  });
});
