var Tardigrade     = this.Tardigrade;
var expect         = new Tardigrade();
var describe       = expect.describe;
var it             = expect.it;
var Note           = this.note;
var SingleNoteView = this.singleNoteView;

describe('single note view', function(){
  var note           = new Note("This is a test");
  var singleNoteView = new SingleNoteView(note);

  it('returns a string', function(){
    expect.isTrue(singleNoteView.renderNote() === "<div>This is a test</div>");
  });
});
