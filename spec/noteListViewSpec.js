describe("note-list-model", function(){

  beforeEach(function() {
    noteList = new NoteList();
    noteListView = new NoteListView(noteList);
  });

  it("can render multiple notes", function() {
    noteList.add("Hello");
    noteList.add("World");
    noteList.add("!!!");
    expect(noteListView.renderNotes())
      .toEqual("<ul><li>Hello</li><li>World</li><li>!!!</li></ul>");
  });

  it("will render the first 20 characters of a note", function() {
    noteList.add("this string is over 20 characters long.");
    expect(noteListView.renderNotes())
      .toEqual("<ul><li>this string is over </li></ul>");
  })
});
