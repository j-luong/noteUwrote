var NoteList    = this.noteList;
var NoteListView = this.noteListView;

document.addEventListener('DOMContentLoaded', function(){
  (function renderPage() {
    var noteList    = new NoteList();
    var noteView    = new NoteListView(noteList.view());
    noteList.add("This is a test and my name jkljkjkjlkj");

    window.addEventListener("load", function(){
      document.getElementById('messages').innerHTML = noteView.renderNotes();
    });

  })();

});
