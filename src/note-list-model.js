var NoteList = (function() {
  var noteMessages = [];

  function storeNote(note) {
     var message = note.printNote();
     var xhttp = new XMLHttpRequest();
     xhttp.open("POST", 'http://localhost:4567/note');
     xhttp.setRequestHeader('Content-Type','text/plain');
     xhttp.send(message);
   }

  return {
    add: function(message) {
      var noteMessage = new Note(message);
      // storeNote(noteMessage);
      noteMessages.push(noteMessage.showMessage());
    },

    view: function() {
      return noteMessages;
    }
  };
})();
