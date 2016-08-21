var NoteListView = (function(noteList) {
  noteList = noteList;

  return {
    renderNotes: function() {
      var content = '<ul>';
      for(i = 0; i < noteList.view().length; i++) {
        content += '<li>' + noteList.view()[i].substring(0, 20) + '</li>';
      }
      content += '</ul>';

      return content;
    }
  }
});
