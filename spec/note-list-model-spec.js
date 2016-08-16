var Note        = require('../note-model').note;
var NoteList    = require('../note-list-model').noteList;
var Tardigrade  = require('./tardigrade').tardigrade;
var tardigrade  = new Tardigrade();
var describe    = tardigrade.describe;
var it          = tardigrade.it;

describe('notes list', function(){
  var noteList = new NoteList();

  noteList.add("Hello");
  noteList.add("World");

  it('contains an array of notes', function(){
    tardigrade.isTrue(noteList.notes.length === 2);
  });

  it('contains correct notes', function(){
    tardigrade.isTrue(noteList.notes[0].message === "Hello");
    tardigrade.isTrue(noteList.notes[1].message === "World");
  })
});
