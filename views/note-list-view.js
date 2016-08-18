//var NoteList = this.noteList;

(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  }

  NoteListView.prototype = {
    render: function() {
      var content = '<ul>';
      for(i = 0; i < this.noteList.length; i++) {
        content += '<li>' + this.noteList[i] + '</li>';
      }
      content += '</ul>';
      return content;
   }
  };
  exports.noteListView = NoteListView;
})(this);
