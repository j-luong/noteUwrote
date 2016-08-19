var Note = this.note;

(function(exports) {

  function NoteList() {
    this.notes = [];
  }

  NoteList.prototype = {
    add: function(message) {
      var note = new Note(message);
      this.notes.push(note);
    },

    view: function() {
      return this.notes;
    }
  };

exports.noteList = NoteList;
})(this);
