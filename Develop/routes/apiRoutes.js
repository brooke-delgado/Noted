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
