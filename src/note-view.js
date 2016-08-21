var NoteView = (function(note) {
  note = note;

  return {
    renderNote: function() {
      return '<div> ' + note.showMessage() + ' </div>';
    }
  }
});
