var Note = require('./note-model').note;

(function(exports) {

  function NoteList() {
    this.notes = [];
  }

  NoteList.prototype = {
    add: function(message) {
      var note = new Note(message);
      this.notes.push(note);
    }
  };

exports.noteList = NoteList;
})(this);
