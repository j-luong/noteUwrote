var newNoteButton = document.getElementById('save-note-button');

newNoteButton.onclick = function() {
  var message = document.getElementById('note-message').value;
  localStorage.setItem('message', message);
};
