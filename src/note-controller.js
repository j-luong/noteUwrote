document.addEventListener('DOMContentLoaded', function(){

  (function addMessage() {
    document
      .getElementById('save-note-button')
      .addEventListener('click', function(clickEvent) {
        clickEvent.preventDefault();
        NoteList.add(document.getElementById('note-message').value);
      })
  })

  // (function renderPage() {
  //   window.addEventListener("load", function(){
  //     document
  //       .getElementById('messages').innerHTML = noteView.renderNotes();
  //   });
  // });

  function showMessages(){
    var messages = NoteListView.view();
    for (var i = 0; i < messages.length; i++) {
      document.getElementById('messages').innerHTML =
        document.getElementById('messages').innerHTML + '<br>' + messages[i];
    }
  }

});
