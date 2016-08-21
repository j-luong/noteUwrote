document.addEventListener('DOMContentLoaded', function(){

  (function addMessage() {
    document
    .getElementById('save-note-button')
    .addEventListener('click', function() {
      event.preventDefault();

      NoteList.add(document.getElementById('note-message').value);

      var view = new NoteListView(NoteList);
      document.getElementById('messages').innerHTML = view.renderNotes();
    })
  })();
  
});
