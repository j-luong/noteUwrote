var Note        = require('../note-model').note;
var NoteList    = require('../note-list-model').noteList;
var Tardigrade  = require('./tardigrade').tardigrade;
var expect      = new Tardigrade();
var describe    = expect.describe;
var it          = expect.it;

describe('notes list', function(){
  var noteList = new NoteList();

  noteList.add("Hello");
  noteList.add("World");

  it('contains an array of notes', function(){
    expect.isTrue(noteList.notes.length === 2);
  });

  it('contains correct notes', function(){
    expect.isTrue(noteList.notes[0].message === "Hello");
    expect.isTrue(noteList.notes[1].message === "World");
  })
});
