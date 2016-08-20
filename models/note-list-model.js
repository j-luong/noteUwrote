(function(exports) {

  function NoteList() {
    this.notes = [];
  }

  NoteList.prototype = {
    addNote: function(message) {
      var note = new Note(message);
      this.notes.push(note);
    },

    viewNotes: function() {
      return this.notes;
    }
  };

exports.noteList = NoteList;
})(this);
