var NoteListView = this.noteListView;
var Tardigrade   = this.Tardigrade;
var expect       = new Tardigrade();
var describe     = expect.describe;
var it           = expect.it;
var NoteList     = this.noteList;

describe('note list view', function(){

  it('returns a string', function(){
    var noteList = new NoteList();
    var noteView = new NoteListView(noteList.view());
    noteList.add("Hello");
    noteList.add("World");
    expect.isTrue(noteView.renderNotes() === "<ul><li>Hello</li><li>World</li></ul>");
  });

  it('returns a string less than 20 characters', function(){
    var noteList = new NoteList();
    var noteView = new NoteListView(noteList.view());
    noteList.add("This is a really really long test");
    expect.isTrue(noteView.renderNotes() === "<ul><li>This is a really rea</li></ul>");
  });
});
