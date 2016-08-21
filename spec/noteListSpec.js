describe("note-list-model", function(){

  beforeEach(function() {
    noteList = new NoteList();
  });

  it("can add a note", function() {
    noteList.add("Hello world");
    expect(noteList.view().length).toEqual(1);
  });

  it("can add multiple notes", function() {
    noteList.add("Hello");
    noteList.add("World");
    noteList.add("!!!")
    expect(noteList.view().length).toEqual(3);
  });

  it("can view a list of notes", function() {
    noteList.add("Hello");
    noteList.add("World");
    noteList.add("!!!")

    expect(noteList.view()).toEqual(["Hello", "World", "!!!"]);
  })
});
