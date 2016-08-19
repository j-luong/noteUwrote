var NoteList           = this.noteList;
var NoteListView       = this.noteListView;
var SingleNoteView     = this.noteView;
var Note               = this.note;


document.addEventListener('DOMContentLoaded', function(){
  (function renderPage() {
    var note              = new Note("This is a test");
    var singleNoteView    = new SingleNoteView(note);
    var noteList          = new NoteList();
    var noteView          = new NoteListView(noteList.view());

    // noteList.add("This is a test");

    window.addEventListener("load", function(){
      document.getElementById('messages').innerHTML = noteView.renderNotes();
      document.getElementById('').innerHTML = singleNoteView.renderNote();
    });



  })();

});
