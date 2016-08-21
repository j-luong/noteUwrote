var NoteList = (function() {
  notes = [];
  noteMessages = [];

  function storeNote(note) {
     var message = note.printNote();
     var xhttp = new XMLHttpRequest();
     xhttp.open("POST", 'http://localhost:4567/note');
     xhttp.setRequestHeader('Content-Type','text/plain');
     xhttp.send(message);
   }

  return {
    add: function(message) {
      var note = new Note(message);
      notes.push(note);
      noteMessages.push(note.showMessage());
    },

    view: function() {
      return noteMessages;
    }
  };
})();
