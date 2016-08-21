document.addEventListener('DOMContentLoaded', function(){
  var noteList = new NoteList();
  var view = new NoteListView(noteList);

  function addNote() {
    document
    .getElementById('save-note-button')
    .addEventListener('click', function() {
      var noteMessage = document.getElementById('note-message').value;

      event.preventDefault();
      noteList.add(noteMessage);
      document.getElementById('messages').innerHTML = view.renderNotes();
    })
  };

  function makeUrlChangeShowNoteForCurrentPage() {
    window.addEventListener("hashchange", showNoteForCurrentPage);
  };

  function showNoteForCurrentPage() {
    showNote(getNoteFromUrl(window.location));
  };

  function getNoteFromUrl(location) {
    message = location.hash.split("#")[1];
    return noteList.view()[message];
  };

  function showNote(note) {
    document
      .getElementById("message")
      .innerHTML = note;
  };

  addNote();
  makeUrlChangeShowNoteForCurrentPage();
});
