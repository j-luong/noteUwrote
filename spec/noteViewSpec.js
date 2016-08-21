describe("note-list-model", function(){

  beforeEach(function() {
    note = new Note("Hello world!");
    noteView = new NoteView(note);
  });

  it("can render a single note", function() {
    expect(noteView.renderNote()).toEqual("<div> Hello world! </div>");
  });
});
