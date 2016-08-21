//var NoteList = this.noteList;

(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  }

  NoteListView.prototype = {
    renderNotes: function() {
      var content = '<ul>';
      for(i = 0; i < this.noteList.length; i++) {
        content += '<li>' + this.noteList[i].substring(0, 20) + '</li>';
      }
      content += '</ul>';
      return content;
   }
  };
  exports.noteListView = NoteListView;
})(this);
