var Note = (function(message) {
  noteMessage = message;

  return {
    showMessage: function() {
      return noteMessage;
    }
  };
});
