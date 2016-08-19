window.onload = function() {
  var newNoteButton   = document.getElementById('save-note-button');
  var messageQty      = localStorage.length;

  document.getElementById('save-note-button').addEventListener('click', function(clickEvent) {
    clickEvent.preventDefault();
    var message = document.getElementById('note-message').value;
    localStorage.setItem(messageQty+1, message);
  });

  // newNoteButton.onclick = function() {
  //   var message = document.getElementById('note-message').value;
  //   localStorage.setItem(messageQty+1, message);
  // };

  function loadMessages() {
    for (var i = 1; i < messageQty+1; i++) {
      var messages = localStorage.getItem(i);
      document.getElementById('messages').innerHTML = document.getElementById('messages').innerHTML + '<br>' + messages;
    }
  }
  loadMessages();
};
