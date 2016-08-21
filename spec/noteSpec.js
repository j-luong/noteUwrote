describe("note-model", function(){

  beforeEach(function() {
    note = new Note("Hello world");
  });

  it("should store a single note", function() {
    expect(note.showMessage()).toEqual("Hello world");
  });
});
