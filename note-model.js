(function(exports) {

  function Note(message) {
    this.message = message;
  }

  Note.prototype = {
    showMessage: function() {
      return this.message;
    }
  };

exports.note = Note;
})(this);
