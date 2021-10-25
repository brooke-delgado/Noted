const { json } = require("express");
const { appendFile, fstat } = require("fs");
const path = require("path");
const router = require("express").Router();

router.get("/notes", function (req, res) {
  // fs to save the db.json file contents and a variable, then send that variable
  let notes = "";
  res.json(notes);
});

// router.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "../public/index.html"));
// });

module.exports = router;

app.post('/api/notes', function(req. res){
  let newNote = req.body;
  let uniqueId = (data.length).toString();
  console.log(uniqueId);
  newNote.id = uniqueId;
  data.push(newNote);

  fs.writeFilesync('./db/db.json', JSON.stringify(data), function(err) {
    if (err) throw (err);
  });
  res.json(data);
});

app.delete("/api/notes/:id", function (req, res) {

  let noteId = req.params.id;
  let newId = 0;
  console.log('Delete note with id ${noteId}');
  data = data.filter(currentNote => {
    return currentNote.id != noteId;
  });

  for (currentNote of data) {
    currentNote.id = newId.toString();
    newId++;
  }

  fs.writeFilesync('./db/db.json', JSON.stringify(data));
  res.json(data);

});


