var NoteListView = (function(noteList) {
  noteList = noteList;
  url = window.location.href;

  return {
    renderNotes: function() {

      var content = '<ul>';
      for(i = 0; i < noteList.view().length; i++) {
        page = '#' + i;
        content += '<li><a href=' + url + page + '>' +
                   noteList.view()[i].substring(0, 20) +
                   '</a></li>';
      }
      content += '</ul>';

      return content;
    }
  }
});
