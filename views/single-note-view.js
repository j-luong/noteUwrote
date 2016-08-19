(function(exports) {
  function SingleNoteView(note) {
    this.note = note;
  }

  SingleNoteView.prototype = {
    renderNote: function() {
      return '<div>' + this.note.showMessage() + '</div>';
   }
  };
  exports.singleNoteView = SingleNoteView;
})(this);
